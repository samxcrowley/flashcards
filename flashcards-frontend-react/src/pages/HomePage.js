import React from "react";
import DeckList from "../components/DeckList";
import AddDeckForm from "../components/AddDeckForm";

export default class HomePage extends React.Component {

    state = {
        addingDeck: false
    }

    addDeck = (bool) => {
        this.setState({addingDeck: bool});
    }

    render() {
        return(
            <div className="bg-white h-screen">
                <div className="py-24 m-auto">
                    <div className="pb-12 text-black text-2xl font-semibold">
                        Your decks
                    </div>
                    <DeckList />
                    <div className="mt-8">
                        {this.state.addingDeck &&
                            <AddDeckForm />
                        }
                        {!this.state.addingDeck &&
                            <button className="font-semibold bg-slate-400 rounded text-white px-5 py-2" onClick={this.addDeck.bind(null, true)}>Add deck</button>
                        }
                    </div>
                </div>
            </div>
        );
    }

};