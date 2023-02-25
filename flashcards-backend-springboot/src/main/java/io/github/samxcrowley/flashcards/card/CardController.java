package io.github.samxcrowley.flashcards.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
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

    @DeleteMapping("/api/decks/{deckId}/cards/{cardId}")
    public void deleteCard(@PathVariable(value = "deckId") Long deckId, @PathVariable(value = "cardId") Long cardId) {
        cardService.deleteCard(deckId, cardId);
    }

    @PutMapping("/api/decks/{deckId}/cards/{cardId}/review/{reviewDifficulty}")
    public void reviewCard(@PathVariable(value = "deckId") Long deckId, @PathVariable(value = "cardId") Long cardId, @PathVariable(value = "reviewDifficulty") Integer reviewDifficulty) {
        cardService.reviewCard(deckId, cardId, LocalDateTime.now(), reviewDifficulty);
    }

}
