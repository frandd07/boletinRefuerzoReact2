import { useState } from "react";
export default function LimitedCounter(){
const [contador,setContador] = useState(0);
const [maximo,setMaximo] = useState(10);

const incrementar = () => {
    if(contador < maximo){
        setContador(contador + 1);
    }
};

const reiniciar = () => {
    setContador(0);
}

return(
    <>
    <h1>Ejercicio 2: LimitedCounter</h1>
    <p>Contador: {contador}</p>
    <label>Establecer máximo:</label>
        <input 
          type="number" 
          value={maximo} 
          onChange={(e) => setMaximo(Number(e.target.value))} 
          min="1"
        />
    <button onClick={incrementar}>Incrementar</button>
    <button onClick={reiniciar}>Reiniciar</button>
    </>
);
}