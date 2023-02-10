import React, { useState } from "react";

function Card() {

    const [flipped, setFlipped] = useState(false);

    let frontText = "Tilgjengelig";
    let backText = "Available";

    return(
        <div className="grid grid-rows content-center">
            <div className="rounded mx-3 my-3 shadow-sm bg-slate-500 h-64 grid grid-rows content-center gap-10">

                <div className="text-white text-2xl">{frontText}</div>

                <div className="text-gray-100 text-2xl">{flipped ? backText : " "}</div>

            </div>
            {!flipped &&
                <button className="rounded h-16 bg-slate-700 text-white text-xl" onClick={() => setFlipped(true)}>
                    Flip Card
                </button>
            }
            {flipped &&
                <div className="w-24 flex flex-row">
                    <button>
                        1
                    </button>
                    <button>
                        2
                    </button>
                    <button>
                        3
                    </button>
                    <button>
                        4
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