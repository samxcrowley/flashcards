package io.github.samxcrowley.flashcards.deck;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table
public class Deck {

    @Id
    @SequenceGenerator(
            name = "deck_sequence",
            sequenceName = "deck_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "deck_sequence"
    )
    private Long id;
    private String name;
    private LocalDate lastStudied;

    public Deck() {}

    public Deck(Long id, String name, LocalDate lastStudied) {
        this.id = id;
        this.name = name;
        this.lastStudied = lastStudied;
    }

    public Deck(String name, LocalDate lastStudied) {
        this.name = name;
        this.lastStudied = lastStudied;
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

    public LocalDate getLastStudied() {
        return lastStudied;
    }

    public void setLastStudied(LocalDate lastStudied) {
        this.lastStudied = lastStudied;
    }

    @Override
    public String toString() {
        return "Deck{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastStudied=" + lastStudied +
                '}';
    }

}
