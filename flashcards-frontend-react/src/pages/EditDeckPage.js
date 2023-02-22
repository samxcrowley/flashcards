import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditDeckPage() {

    const { deckId } = useParams();
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        axios.get("/api/decks/" + deckId + "/cards")
            .then(response => {
                setCards(response.data);
            });
    }, []);

    return(
        <div className="py-24">
            <div className="mb-5">Deck name</div>
            <table className="m-auto">
                <thead>
                    <tr>
                        <th>Front text</th>
                        <th>Back text</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((value) => {
                        return(
                            <tr>
                                <td>{value.frontText}</td>
                                <td>{value.backText}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default EditDeckPage;