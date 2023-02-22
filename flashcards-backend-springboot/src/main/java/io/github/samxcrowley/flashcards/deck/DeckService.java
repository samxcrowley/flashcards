package io.github.samxcrowley.flashcards.deck;

import io.github.samxcrowley.flashcards.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeckService {

    private final DeckRepository deckRepository;

    @Autowired
    public DeckService(DeckRepository deckRepository) {
        this.deckRepository = deckRepository;
    }

    public List<Deck> getAllDecks() {
        return deckRepository.findAll();
    }

    public void addNewDeck(Deck deck) {
        deck.setNumCards(0);
        deckRepository.save(deck);
    }

    public void deleteDeck(Long deckId) {
        Optional<Deck> toDeleteOpt = deckRepository.findById(deckId);
        if (toDeleteOpt.isPresent()) {
            Deck toDeleteDeck = toDeleteOpt.get();
            deckRepository.delete(toDeleteDeck);
        } else {
            throw new ResourceNotFoundException("Deck with id " + deckId + " not found when attempting to delete it.");
        }
    }

}
