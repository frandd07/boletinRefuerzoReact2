import { useState } from "react";
export default function SurveySimulator(){

    const[contadorSI,setContadorSi] = useState(0);
    const[contadorNO,setContadorNO] = useState(0);
    const[contadorTalVez,setContadorTalVez] = useState(0);

    const votaSI = () => setContadorSi(contadorSI + 3);
    const votaNO = () => setContadorNO(contadorNO + 1);
    const votaTalVez = () => setContadorTalVez(contadorTalVez + 2);

    return(
        <>
        <h1>Ejercicio 4: SurveySimulator</h1>
        <button onClick={votaSI}>SÍ</button>
        <button onClick={votaNO}>NO</button>
        <button onClick={votaTalVez}>TAL VEZ</button>
        <h5>VOTACIONES: </h5>
        <p>SÍ: {contadorSI}</p>
        <p>NO: {contadorNO}</p>
        <p>TAL VEZ: {contadorTalVez}</p>
        </>
    );
}