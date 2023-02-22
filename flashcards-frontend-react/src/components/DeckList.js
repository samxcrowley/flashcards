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
                    {this.state.decks.map((value, key) => {
                        return (
                            <tr key={key}>
                                <div className="bg-myorange-200 px-5 pb-4 pt-5 rounded mx-3 my-3 shadow-md w-72">
                                    <p className="text-black text-xl font-semibold pb-2">{value.name}</p>
                                    <p className="text-black">Number of cards: {value.numCards}</p>
                                    <p className="text-black">Last studied on {value.lastStudied}</p>
                                    <Link to="/card">
                                        <button className="text-right font-semibold bg-myorange-500 px-5 mt-3 h-8 text-black rounded">Study</button>
                                    </Link>
                                </div>
                            </tr>
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