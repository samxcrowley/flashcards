package io.github.samxcrowley.flashcards.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping("/api/decks/{deckId}/cards")
    public List<Card> getAllCardsByDeckId(@PathVariable(value = "deckId") Long deckId) {
        return cardService.getAllCardsByDeckId(deckId);
    }

    @PostMapping("/api/decks/{deckId}/cards")
    public void addNewCard(@PathVariable(value = "deckId") Long deckId, @RequestBody Card card) {
        cardService.addNewCard(deckId, card);
    }

}
