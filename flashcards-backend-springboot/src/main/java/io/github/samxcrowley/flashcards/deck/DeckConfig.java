package io.github.samxcrowley.flashcards.deck;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class DeckConfig {

    @Bean
    CommandLineRunner commandLineRunner(DeckRepository repository) {

        return args -> {

            Deck norskPhrasesDeck = new Deck(
                    "Norwegian phrases",
                    LocalDate.of(2023, Month.JANUARY, 13)
            );

            Deck chemicalsDeck = new Deck(
                    "Chemicals",
                    LocalDate.of(2023, Month.FEBRUARY, 5)
            );

            repository.saveAll(List.of(norskPhrasesDeck, chemicalsDeck));

        };

    }

}
