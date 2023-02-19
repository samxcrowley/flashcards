import React from "react";
import axios from "axios";

export default class DeckList extends React.Component {

    state = {
        decks: []
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/api/v1/deck")
            .then(response => {
                this.setState({decks: response.data});
            });
    }

    renderDecks() {
        if (this.state.decks === null || this.state.decks.length === 0) {
            return(
                <div className="py-16 text-xl">No decks created yet.</div>
            );
        } else {
            return(
                <div className="py-16 flex flex-wrap justify-center">
                    {this.state.decks.map((value, key) => {
                        return (
                            <tr key={key}>
                                <div className="bg-orange-50 px-5 pb-4 pt-5 rounded mx-3 my-3 shadow-md w-72">
                                    <p className="text-black text-xl font-semibold pb-2">{value.name}</p>
                                    <p className="text-black">Number of cards: {value.numCards}</p>
                                    <p className="text-black">Last studied on {value.lastStudied}</p>
                                    <button className="text-right font-semibold bg-orange-800 px-5 mt-3 h-8 text-white rounded">Study</button>
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
            <div className="bg-orange-200 h-screen">
                <div className="flex flex-col py-24 justify-center">
                    <div className="text-black text-3xl font-semibold">
                        Your decks
                    </div>
                    {this.renderDecks()}
                </div>
            </div>
        );
    }

}