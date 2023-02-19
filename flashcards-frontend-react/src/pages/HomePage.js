import React from "react";
import DeckList from "../components/DeckList";

export default class HomePage extends React.Component {
    render() {
        return(
            <div className="bg-white h-screen">
                <div className="flex flex-col py-24 justify-center">
                    <div className="text-black text-3xl font-semibold">
                        Your decks
                    </div>
                    <DeckList />
                </div>
            </div>
        );
    }
};