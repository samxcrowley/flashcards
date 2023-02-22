package io.github.samxcrowley.flashcards.deck;

import jakarta.persistence.*;

@Entity
@Table
public class Deck {

    @Id
    @SequenceGenerator(name = "deck_sequence", sequenceName = "deck_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "deck_sequence")
    private Long id;
    private String name;
    private Integer numCards;

    public Deck() {}

    public Deck(Long id, String name, Integer numCards) {
        this.id = id;
        this.name = name;
        this.numCards = numCards;
    }

    public Deck(String name, Integer numCards) {
        this.name = name;
        this.numCards = numCards;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNumCards() {
        return numCards;
    }

    public void setNumCards(Integer numCards) {
        this.numCards = numCards;
    }

    @Override
    public String toString() {
        return "Deck{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", numCards=" + numCards +
                '}';
    }

}
