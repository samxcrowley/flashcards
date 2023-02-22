import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class DeckList extends React.Component {

    state = {
        decks: []
    }
    
    componentDidMount() {
        axios.get("/api/decks")
            .then(response => {
                this.setState({decks: response.data});
            });
    }

    renderDecks() {
        if (this.state.decks.length === 0) {
            return(
                <div className="py-16 text-black text-xl">No decks found.</div>
            );
        } else {
            return(
                <div className="py-16 flex flex-wrap justify-center">
                    {this.state.decks.map((value) => {
                        return(
                            <div className="bg-myorange-100 px-5 pb-4 pt-5 rounded mx-3 my-3 shadow-md w-72 text-left">
                                <p className="text-black text-xl font-semibold mb-5">{value.name}</p>
                                <p className="text-black mb-5">Number of cards: {value.numCards}</p>
                                <div className="flex items-center justify-between">
                                    <Link to={`/editDeck/${value.id}`}>
                                        <button className="text-right font-semibold bg-myorange-600 px-5 mt-3 h-8 text-white rounded">Edit</button>
                                    </Link>
                                    <Link to="/card">
                                        <button className="text-right font-semibold bg-myorange-600 px-5 mt-3 h-8 text-white rounded">Study</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    render() {
        return(
            <div>
                {this.renderDecks()}
            </div>
        );
    }

}