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
                <div className="mt-8 w-1/2 m-auto bg-slate-400 rounded shadow">
                    <div className="justify-center">
                        <div className="bg-slate-300 rounded py-3 my-6 text-slate-800 text-2xl font-semibold">
                            Your decks
                        </div>
                        <div className="my-8">
                            {this.state.addingDeck &&
                                <AddDeckForm />
                            }
                            {!this.state.addingDeck &&
                                <button className="font-semibold bg-slate-700 rounded-md text-white px-5 py-2" onClick={this.addDeck.bind(null, true)}>Add deck</button>
                            }
                        </div>
                    </div>
                    <div className="pb-10">
                        <DeckList />
                    </div>
                </div>
            </div>
        );
    }

};