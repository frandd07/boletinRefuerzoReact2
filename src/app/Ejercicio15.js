import { useState } from "react";

export default function TextCarousel({frases}){

    const[indiceActual,setIndiceActual] = useState(0);

    const siguiente = () => {
        setIndiceActual((indiceAnterior) => (indiceAnterior +1) % frases.length)
    }

    const anterior = () => {
        setIndiceActual((indiceAnterior) => (indiceAnterior -1 + frases.length) % frases.length)
    }

    return(
        <>
        <h1>Ejercicio 15: TextCarousel</h1>
        <p>{frases[indiceActual]}</p>
        <button onClick={anterior}>Anterior</button>
        <button onClick={siguiente}>Siguiente</button>
        </>
    );
}