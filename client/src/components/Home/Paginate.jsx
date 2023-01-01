import React from "react";

export default function Paginate ({
    CardsPerPage,
    products,
    nextPag,
    prevPag,
    CurrentPag,
    firstPag,
    lastPag,}) {


    return (
        <nav className="flex">
            <button className="w-full px-4 py-2 border-t border-b text-base text-white font-semibold bg-red-600 rounded-l-xl" disabled={CurrentPag === 1} onClick={prevPag}>Anterior</button>
            <button className="w-full px-4 py-2 border-t border-b text-base text-white font-semibold bg-red-600">{CurrentPag}</button>
            <button className="w-full px-4 py-2 border-t border-b text-base text-white font-semibold bg-red-600 rounded-r-xl" disabled={CurrentPag === Math.ceil(products / CardsPerPage)} onClick={nextPag}>Siguiente</button>
        </nav>
    )
}