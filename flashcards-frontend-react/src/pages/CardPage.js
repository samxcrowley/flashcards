import React, { useState } from "react";

function Card() {

    const [flipped, setFlipped] = useState(false);

    let frontText = "Tilgjengelig";
    let backText = "Available";

    return(
        <div className="grid grid-rows content-center justify-center">
            <div className="rounded mx-3 my-3 shadow-sm bg-slate-500 w-128 h-64 grid grid-rows content-center gap-4">

                <div className="text-white text-2xl">{frontText}</div>

                <div className="text-gray-100 text-2xl">{flipped ? backText : " "}</div>

            </div>
            {!flipped &&
                <button className="rounded w-96 h-16 bg-slate-700 text-white text-xl" onClick={() => setFlipped(true)}>
                    Flip Card
                </button>
            }
            {flipped &&
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