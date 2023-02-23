import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AddCardForm() {

    const { deckId } = useParams();
    const [ frontText, setFrontText ] = useState("");
    const [ backText, setBackText ] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const newCard = {
            frontText: frontText,
            backText: backText
        };

        axios.post("/api/decks/" + deckId + "/cards", newCard);
        window.location.reload(false);

    }

    const handleFrontTextChange = (event) => {
        setFrontText(event.target.value);
    }

    const handleBackTextChange = (event) => {
        setBackText(event.target.value);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input className="shadow appearance-none border rounded py-1 px-3 mx-2 text-gray-700 leading-tight" type="text" name="newFrontText" placeholder="Card front text" onChange={handleFrontTextChange} required />
                <input className="shadow appearance-none border rounded py-1 px-3 mx-2 text-gray-700 leading-tight" type="text" name="newBackText" placeholder="Card back text" onChange={handleBackTextChange} required />
                <button className="font-semibold bg-slate-400 rounded text-white px-5 py-1 mx-2" type="submit">Add card</button>
            </form>
        </div>
    );

}

export default AddCardForm;