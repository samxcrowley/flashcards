import React from "react";
import axios from "axios";

export default class AddDeckForm extends React.Component {

    state = {
        newDeckName: ""
    }

    handleSubmit = event => {

        event.preventDefault();

        const newDeck = {
            name: this.state.newDeckName
        }

        axios.post("/api/decks", newDeck)
            .then(response => {
                window.location = "/"
            });

    }

    handleChange = event => {
        this.setState({ newDeckName: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight" type="text" name="newDeckName" placeholder="Deck name" onChange={this.handleChange} />
                    <button className="font-semibold bg-slate-400 rounded text-white px-5 py-2 mx-2" type="submit">Add deck</button>
                </form>
            </div>
        );
    }

}