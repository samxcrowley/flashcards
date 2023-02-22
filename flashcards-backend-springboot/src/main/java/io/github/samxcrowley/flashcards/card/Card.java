package io.github.samxcrowley.flashcards.card;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import io.github.samxcrowley.flashcards.deck.Deck;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table
public class Card {

    @Id
    @SequenceGenerator(name = "card_sequence", sequenceName = "card_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "card_sequence")
    private Long id;
    private String frontText;
    private String backText;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "deck_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Deck deck;

    public Card() {}

    public Card(Long id, String frontText, String backText) {
        this.id = id;
        this.frontText = frontText;
        this.backText = backText;
    }

    public Card(String frontText, String backText) {
        this.frontText = frontText;
        this.backText = backText;
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

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", frontText='" + frontText + '\'' +
                ", backText='" + backText + '\'' +
                '}';
    }

}
