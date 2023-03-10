package io.github.samxcrowley.flashcards.card;

import io.github.samxcrowley.flashcards.deck.Deck;
import io.github.samxcrowley.flashcards.deck.DeckRepository;
import io.github.samxcrowley.flashcards.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    private final CardRepository cardRepository;
    private final DeckRepository deckRepository;

    @Autowired
    public CardService(CardRepository cardRepository, DeckRepository deckRepository) {
        this.cardRepository = cardRepository;
        this.deckRepository = deckRepository;
    }

    public void addNewCard(Long deckId, Card card) {

        Optional<Deck> deckOpt = deckRepository.findById(deckId);

        if (deckOpt.isPresent()) {

            Deck deck = deckOpt.get();
            deck.setNumCards(deck.getNumCards() + 1);

            card.setDeck(deck);

            card.setFactor(0);
            card.setLastInterval(0);
            card.setNextReviewDueDate(LocalDateTime.now());

            cardRepository.save(card);

        } else {
            throw new ResourceNotFoundException("Deck with id " + deckId + " not found when attempting to add new card.");
        }

    }

    public void deleteCard(Long deckId, Long cardId) {

        Optional<Deck> deckOpt = deckRepository.findById(deckId);
        Optional<Card> cardOpt = cardRepository.findByIdAndDeckId(cardId, deckId);

        if (deckOpt.isPresent() && cardOpt.isPresent()) {
            Deck deck = deckOpt.get();
            deck.setNumCards(deck.getNumCards() - 1);
            Card cardToDelete = cardOpt.get();
            cardRepository.delete(cardToDelete);
        } else if (deckOpt.isEmpty()) {
            throw new ResourceNotFoundException("Deck with id " + deckId + " not found when attempting to delete a card.");
        } else {
            throw new ResourceNotFoundException("Card with id " + cardId + " in deck with id " + deckId + " not found when attempting to delete the card.");
        }

    }

    public void reviewCard(Long deckId, Long cardId, LocalDateTime reviewTime, Integer reviewDifficulty) {

        Optional<Card> cardOpt = cardRepository.findByIdAndDeckId(cardId, deckId);

        if (cardOpt.isPresent()) {

            Card card = cardOpt.get();
            LocalDateTime now = LocalDateTime.now();

            // calculate when card is next due for a review, based off of difficulty and current date
            // informed by this GitHub post by @fasiha on how Anki calculates intervals for cards:
            // https://gist.github.com/fasiha/31ce46c36371ff57fdbc1254af424174

            // number of days between when card was due for a review and now
            float delayDays = (float) Duration.between(card.getNextReviewDueDate(), now).toDays();

            // calculate intervals (in days) for each difficulty 1-4
            float factor = (float) card.getFactor();

            int interval1 = card.getLastInterval();
            int interval2 = (int) Math.max(interval1 + 1, (interval1 + delayDays / 4) * 1.2);
            int interval3 = (int) Math.max(interval2 + 1, (interval1 + delayDays / 2) * (factor / 1000));
            int interval4 = (int) Math.max(interval3 + 1, (interval1 + delayDays) * (factor / 1000) * 1.3);

            // set review intervals and new factor
            switch (reviewDifficulty) {
                case 1 -> {
                    card.setNextReviewDueDate(now.plusDays(interval1));
                    card.setFactor((int) Math.max(1300, factor - 200));
                }
                case 2 -> {
                    card.setNextReviewDueDate(now.plusDays(interval2));
                    card.setFactor((int) Math.max(1300, factor - 150));
                }
                case 3 -> {
                    card.setNextReviewDueDate(now.plusDays(interval3));
                    // (factor is unchanged here)
                }
                case 4 -> {
                    card.setNextReviewDueDate(now.plusDays(interval4));
                    card.setFactor((int) Math.max(1300, factor + 150));
                }
            }

            cardRepository.save(card);

        } else {
            throw new ResourceNotFoundException("Card with id " + cardId + " not found when attempting to update its review information.");
        }

    }

    public List<Card> getCardsDueForReview(Long deckId) {

        List<Card> allCards = getAllCardsByDeckId(deckId);

        Collections.sort(allCards);

        LocalDateTime now = LocalDateTime.now();
        List<Card> dueCards = new ArrayList<>();

        // get all cards with a review due date in the past
        for (Card card : allCards) {

            if (card.getNextReviewDueDate().isBefore(now)) {
                dueCards.add(card);
            } else {
                break;
            }

        }

        return dueCards;

    }

    public List<Card> getAllCardsByDeckId(Long deckId) {
        return cardRepository.findByDeckId(deckId);
    }

}
