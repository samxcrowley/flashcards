import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditDeckPage() {

    const { deckId } = useParams();
    const [ deck, setDeck ] = useState(null);
    const [ cards, setCards ] = useState([]);

    useEffect(() => {

        axios.get("/api/decks/" + deckId)
            .then(response => {
                console.log(response);
                setDeck(response.data);
            });

        axios.get("/api/decks/" + deckId + "/cards")
            .then(response => {
                setCards(response.data);
            });

    });

    return(
        <div className="my-24 pt-4 w-1/2 m-auto bg-slate-100 rounded shadow">
            {deck &&
                <div className="mb-5 text-2xl font-bold text-slate-800">{deck.name}</div>
            }
            <div className="flex flex-row justify-center mb-5">
                <button className="px-3 mx-3 my-1 rounded bg-red-400 text-white font-semibold">Delete deck</button>
                <button className="px-3 mx-3 my-1 rounded bg-slate-600 text-white font-semibold">Edit deck name</button>
                <button className="px-3 mx-3 my-1 rounded bg-slate-600 text-white font-semibold">Add card</button>
            </div>
            <div className="bg-slate-200 border-10 py-5">
                <table className="m-auto">
                    <thead>
                        <tr>
                            <th>Front text</th>
                            <th>Back text</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((value) => {
                            return(
                                <tr className="even:bg-slate-300 text-left">
                                    <td className="px-5 py-2">{value.frontText}</td>
                                    <td className="px-5 py-2">{value.backText}</td>
                                    <td className="px-3 py-2">
                                        <button className="font-semibold bg-slate-400 rounded text-white px-2">Edit</button>
                                    </td>
                                    <td className="px-1 py-2">
                                        <button className="font-semibold bg-slate-400 rounded text-white px-2">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default EditDeckPage;