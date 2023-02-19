import React from "react";
import Card from "../components/Card";

export default class CardPage extends React.Component {

    state = {
        flipped: false
    }

    flipCard() {
        this.setState(state => ({flipped: !this.state.flipped}));
    }

    render() {
        return(
            <div className="bg-orange-700 h-screen">
                <div className="py-24 grid grid-cols-3 gap-4 content-center">
                    <div className="grid grid-rows content-center justify-center">
                        <Card frontText="Front" backText="Back" flipped={this.state.flipped} />
                        {!this.state.flipped &&
                            <button className="w-96 text-white text-xl" onClick={() => this.flipCard()}>
                                Flip Card
                            </button>
                        }
                        {this.state.flipped &&
                            <div className="w-96 flex flex-row justify-between">
                                <button className="rounded px-2 py-1 bg-red-500 text-white text-lg">
                                    Again (1)
                                </button>
                                <button className="rounded px-2 py-1 bg-orange-500 text-white text-lg">
                                    Hard (2)
                                </button>
                                <button className="rounded px-2 py-1 bg-yellow-500 text-white text-lg">
                                    Good (3)
                                </button>
                                <button className="rounded px-2 py-1 bg-green-500 text-white text-lg">
                                    Easy (4)
                                </button>
                            </div>
                        }
                    </div>
                    <div className=""></div>
                </div>
            </div>
        );
    }

};