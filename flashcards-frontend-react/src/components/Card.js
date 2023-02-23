import React from "react";

export default class Card extends React.Component {

    render() {
        return(
            <div className="rounded mx-3 my-3 shadow-sm bg-slate-600 w-128 h-64 grid grid-rows content-center gap-4">
                <div className="text-white text-2xl">{this.props.frontText}</div>
                <div className="text-white text-2xl">{this.props.flipped ? this.props.backText : " "}</div>
            </div>
        );
    }

}