import { useState } from "react";
import Card from "../components/Card";
import cardsData from '../data/subjectMainData.json';

function CardTemplate() {
    const [filtroAnio, setFiltroAnio] = useState("");

    const cardsFiltradas = filtroAnio
        ? cardsData.filter(card => card.courseYear === filtroAnio)
        : cardsData;

    return (
        <div className="animate-slide-in-top border-neutral-700 grid grid-cols-6 gap-5 px-4 py-2 md:py-4 md:px-8 lg:py-4 lg:px-16">
            <div className="col-span-6 flex gap-4">
                <button
                    onClick={() => setFiltroAnio("")}
                    className={`px-3 py-1 transition-colors duration-300 ${
                        filtroAnio === "" 
                            ? "text-white border-b-2 border-white" 
                            : "text-neutral-400 hover:text-neutral-200"
                    }`}
                >
                    Todo
                </button>
                <button
                    onClick={() => setFiltroAnio("1er año")}
                    className={`px-3 py-1 transition-colors duration-300 ${
                        filtroAnio === "1er año" 
                            ? "text-white border-b-2 border-white" 
                            : "text-neutral-400 hover:text-neutral-200"
                    }`}
                >
                    1er año
                </button>
                <button
                    onClick={() => setFiltroAnio("2do año")}
                    className={`px-3 py-1 transition-colors duration-300 ${
                        filtroAnio === "2do año" 
                            ? "text-white border-b-2 border-white" 
                            : "text-neutral-400 hover:text-neutral-200"
                    }`}
                >
                    2do año
                </button>
            </div>
            {cardsFiltradas.map((card, index) => (
                <div 
                    key={index}
                    className="col-span-6 md:col-span-3 lg:col-span-2 bg-neutral-800 text-white shadow-md hover:shadow-sm hover:shadow-neutral-600 border border-neutral-700 rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
                >
                    <Card
                        title={card.title || 'Sin título'}
                        year={card.year || ''}
                        quarter={card.quarter || ''}
                        courseYear={card.courseYear || ''}
                        slug={card.slug || ''}
                        buttonText='Ver más'
                    />
                </div>
            ))}
        </div>
    );
}

export default CardTemplate;
