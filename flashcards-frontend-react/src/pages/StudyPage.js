import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

function StudyPage() {

    const [ cards, setCards ] = useState([{"frontText": "Loading cards..."}]);
    const { deckId } = useParams();
    const [ currentCardIndex, setCurrentCardIndex ] = useState(0);
    const [ flipped, setFlipped ] = useState(false);
    const [ deckDone, setDeckDone ] = useState(false);

    useEffect(() => {

        axios.get("/api/decks/" + deckId + "/cards")
            .then(response => {
                setCards(response.data);
            });

    }, []);

    const flipCard = () => {
        setFlipped(true);
    }

    const nextCard = () => {

        let oldIndex = currentCardIndex;

        if (oldIndex < cards.length - 1) {
            setCurrentCardIndex(oldIndex + 1);
            setFlipped(false);
        } else {
            setDeckDone(true);
        }

    }

    return(
        <div className="bg-white h-screen">

            {deckDone &&
                <div className="py-36 grid grid-rows content-center justify-center">
                    <div className="text-2xl py-16">You have completed your reviews of this deck for today!</div>
                    <Link to="/">
                        <button className="rounded px-6 py-1 h-12 text-black text-xl font-bold">Return Home</button>
                    </Link>
                </div>
            }

            {!deckDone && cards &&
                <div className="py-36 grid grid-rows content-center justify-center">
                    <Card frontText={cards[currentCardIndex].frontText} backText={cards[currentCardIndex].backText} flipped={flipped} />
                    {!flipped &&
                        <button className="w-96 text-black text-xl" onClick={() => flipCard()}>
                            Flip Card
                        </button>
                    }
                    {flipped &&
                        <div className="w-96 flex flex-row justify-between">
                            <button className="rounded px-2 py-1 bg-red-500 text-white font-semibold text-lg" onClick={() => nextCard()}>
                                Again (1)
                            </button>
                            <button className="rounded px-2 py-1 bg-orange-500 text-white font-semibold text-lg" onClick={() => nextCard()}>
                                Hard (2)
                            </button>
                            <button className="rounded px-2 py-1 bg-yellow-500 text-white font-semibold text-lg" onClick={() => nextCard()}>
                                Good (3)
                            </button>
                            <button className="rounded px-2 py-1 bg-green-500 text-white font-semibold text-lg" onClick={() => nextCard()}>
                                Easy (4)
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    );

}

export default StudyPage;