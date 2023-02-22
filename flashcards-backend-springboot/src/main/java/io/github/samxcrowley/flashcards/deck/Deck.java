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

    public Deck() {}

    public Deck(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Deck(String name) {
        this.name = name;
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

    @Override
    public String toString() {
        return "Deck{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

}
