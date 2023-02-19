package io.github.samxcrowley.flashcards.deck;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeckService {

    private final DeckRepository deckRepository;

    @Autowired
    public DeckService(DeckRepository deckRepository) {
        this.deckRepository = deckRepository;
    }

    public List<Deck> getDecks() {
        return deckRepository.findAll();
    }

    public void addNewDeck(Deck deck) {
        deckRepository.save(deck);
    }

}
