import { useState } from "react";
export default function AverageCalculator(){
    const[lista,setLista] = useState([]);
    const[calificacion,setCalificacion] = useState("");
    const [promedio, setPromedio] = useState(null);

    const anadirCalificacion = (calificacion) => {
        if(calificacion.trim() == "") return;
        if(calificacion > 10) {
            alert("Las calificaciones son sobre 10 ");
            return;
        }
           
        setLista([...lista,{calificacion: Number(calificacion)}]);
        setCalificacion("");
    }

    const calcularPromedio = () => {
        if (lista.length === 0) return;
        const total = lista.reduce((suma, item) => suma + item.calificacion, 0);
        setPromedio(total / lista.length);
    }

    return(
        <>
        <h1>Ejercicio 3: AverageCalculator</h1>
        <input
        type="text"
        value={calificacion}
        onChange={(e) => setCalificacion(e.target.value)}
        placeholder="Calificación"
        />
        <button onClick={() => anadirCalificacion(calificacion)}>Añadir calificación</button>
        <p>Lista de calificaciones</p>
        <ul>
            {lista.map((item,index) => {
                 <li key={index}>{item.calificacion}</li>
            })}
        </ul>
        <button onClick={calcularPromedio}>Calcular promedio</button>
        <p>Promedio: {promedio}</p>
        </>
    );


}