import React from "react";

function Card() {
    
    return(
        <div className="rounded bg-slate-500 h-64">
            Card
        </div>
    );

}

function CardView() {

    return(
        <div className="bg-slate-50 h-screen">
            <div className="py-24 grid grid-cols-3 gap-4 content-center">
                <div className=""></div>
                <Card />
                <div className=""></div>
            </div>
        </div>
    );

}

const CardPage = () => {
    return <CardView />;
};

export default CardPage;