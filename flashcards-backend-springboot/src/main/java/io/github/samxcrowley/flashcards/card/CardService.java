package io.github.samxcrowley.flashcards.card;

import io.github.samxcrowley.flashcards.deck.Deck;
import io.github.samxcrowley.flashcards.deck.DeckRepository;
import io.github.samxcrowley.flashcards.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<Card> getAllCardsByDeckId(Long deckId) {
        return cardRepository.findByDeckId(deckId);
    }

    public void addNewCard(Long deckId, Card card) {
        Optional<Deck> deckOpt = deckRepository.findById(deckId);
        if (deckOpt.isPresent()) {
            Deck deck = deckOpt.get();
            deck.setNumCards(deck.getNumCards() + 1);
            card.setDeck(deck);
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

}
