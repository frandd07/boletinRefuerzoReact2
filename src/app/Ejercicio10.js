import { useState,useEffect } from "react";
export default function GuessTheNumber(){
    const[numeroAleatorio,setNumeroAleatorio] = useState("");
    const[numeroUsuario,setNumeroUsuario] = useState("");
    const[mensaje,setMensaje] = useState("");

    const comprobarNumero = (numero) => {
        if(numeroAleatorio > numeroUsuario){
            setMensaje("Número ingresado demasiado bajo")
        }else if(numeroAleatorio < numeroUsuario){
            setMensaje("Número ingresado demasiado alto")
        }else{
            setMensaje("¡¡¡¡¡Has acertado el número!!!!!")
        }
    }

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setNumeroAleatorio(randomNumber);  
    }, []); 

return(
    <>
    <h1>Ejercicio 10: GuessTheNumber</h1>
    <input type="number"
    value={numeroUsuario}
    placeholder="Numero"
    onChange={(e) => setNumeroUsuario(e.target.value)}/>
    <button onClick={() => comprobarNumero(numeroUsuario)}>Comprobar</button>
    <p>{mensaje}</p>
    </>
);
}