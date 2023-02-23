import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default class StudyPage extends React.Component {

    // need reference to current card (card ID)
    // so that can send back data about user's response

    state = {
        cards: [{frontText: "Regjering", backText: "Government"},
                {frontText: "Gård", backText: "Farm"},
                {frontText: "Slott", backText: "Palace"}],
        currentCardIndex: 0,
        cardFlipped: false,
        deckDone: false
    }

    flipCard() {
        this.setState(state => ({cardFlipped: true}));
    }

    nextCard() {
        let oldIndex = this.state.currentCardIndex;
        if (oldIndex < this.state.cards.length - 1) {
            this.setState(state => ({currentCardIndex: oldIndex + 1, cardFlipped: false}));
        } else {
            this.setState(state => ({deckDone: true}));
        }
    }

    render() {

        let currentCard = this.state.cards[this.state.currentCardIndex];

        return(
            <div className="bg-white h-screen">

                {this.state.deckDone &&
                    <div className="py-36 grid grid-rows content-center justify-center">
                        <div className="text-2xl py-16">You have completed your reviews of this deck for today!</div>
                        <Link to="/">
                            <button className="rounded px-6 py-1 h-12 text-black text-xl font-bold">Return Home</button>
                        </Link>
                    </div>
                }

                {!this.state.deckDone &&
                    <div className="py-36 grid grid-rows content-center justify-center">
                        <Card frontText={currentCard.frontText} backText={currentCard.backText} flipped={this.state.cardFlipped} />
                        {!this.state.cardFlipped &&
                            <button className="w-96 text-black text-xl" onClick={() => this.flipCard()}>
                                Flip Card
                            </button>
                        }
                        {this.state.cardFlipped &&
                            <div className="w-96 flex flex-row justify-between">
                                <button className="rounded px-2 py-1 bg-red-500 text-white font-semibold text-lg" onClick={() => this.nextCard()}>
                                    Again (1)
                                </button>
                                <button className="rounded px-2 py-1 bg-orange-500 text-white font-semibold text-lg" onClick={() => this.nextCard()}>
                                    Hard (2)
                                </button>
                                <button className="rounded px-2 py-1 bg-yellow-500 text-white font-semibold text-lg" onClick={() => this.nextCard()}>
                                    Good (3)
                                </button>
                                <button className="rounded px-2 py-1 bg-green-500 text-white font-semibold text-lg" onClick={() => this.nextCard()}>
                                    Easy (4)
                                </button>
                            </div>
                        }
                    </div>
                }
            </div>
        );

    }

};