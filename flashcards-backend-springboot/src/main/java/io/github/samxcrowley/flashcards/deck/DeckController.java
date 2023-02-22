package io.github.samxcrowley.flashcards.deck;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class DeckController {

    private final DeckService deckService;

    @Autowired
    public DeckController(DeckService deckService) {
        this.deckService = deckService;
    }

    @GetMapping("/api/decks")
    public List<Deck> getAllDecks() {
        return deckService.getAllDecks();
    }

    @PostMapping("/api/decks")
    public void addNewDeck(@RequestBody Deck deck) {
        deckService.addNewDeck(deck);
    }

    @DeleteMapping("/api/decks/{deckId}")
    public void deleteDeck(@PathVariable Long deckId) {
        deckService.deleteDeck(deckId);
    }

}
