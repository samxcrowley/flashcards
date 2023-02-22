package io.github.samxcrowley.flashcards.card;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findByDeckId(Long deckId);
    Optional<Card> findByIdAndDeckId(Long id, Long deckId);
}
