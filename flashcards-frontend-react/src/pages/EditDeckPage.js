import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditDeckPage() {

    const { deckId } = useParams();
    const { deckName } = "";
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        axios.get("/api/decks/" + deckId + "/cards")
            .then(response => {
                setCards(response.data);
            });
    }, []);

    return(
        <div className="py-24">
            <div className="mb-5">{deckName}</div>
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
                            <tr>
                                <td className="px-5 py-2">{value.frontText}</td>
                                <td className="px-5 py-2">{value.backText}</td>
                                <td className="px-3 py-2">
                                    <button className="font-semibold bg-myorange-600 rounded text-white px-2 py-1">Edit</button>
                                </td>
                                <td className="px-1 py-2">
                                    <button className="font-semibold bg-myorange-600 rounded text-white px-2 py-1">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default EditDeckPage;