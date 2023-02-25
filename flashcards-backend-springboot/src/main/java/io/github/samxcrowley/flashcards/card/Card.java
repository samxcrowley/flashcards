package io.github.samxcrowley.flashcards.card;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import io.github.samxcrowley.flashcards.deck.Deck;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;

@Entity
@Table
public class Card {

    @Id
    @SequenceGenerator(name = "card_sequence", sequenceName = "card_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "card_sequence")
    private Long id;
    private String frontText;
    private String backText;
    private LocalDateTime lastReviewed;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "deck_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Deck deck;

    public Card() {}

    public Card(Long id, String frontText, String backText, LocalDateTime lastReviewed) {
        this.id = id;
        this.frontText = frontText;
        this.backText = backText;
        this.lastReviewed = lastReviewed;
    }

    public Card(String frontText, String backText, LocalDateTime lastReviewed) {
        this.frontText = frontText;
        this.backText = backText;
        this.lastReviewed = lastReviewed;
    }

    public Deck getDeck() {
        return deck;
    }

    public void setDeck(Deck deck) {
        this.deck = deck;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFrontText() {
        return frontText;
    }

    public void setFrontText(String frontText) {
        this.frontText = frontText;
    }

    public String getBackText() {
        return backText;
    }

    public void setBackText(String backText) {
        this.backText = backText;
    }

    public LocalDateTime getLastReviewed() {
        return lastReviewed;
    }

    public void setLastReviewed(LocalDateTime lastStudied) {
        this.lastReviewed = lastStudied;
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", frontText='" + frontText + '\'' +
                ", backText='" + backText + '\'' +
                ", lastReviewed=" + lastReviewed +
                ", deck=" + deck +
                '}';
    }

}
