import { useState } from "react";
export default function StudentList(){

    const[nombre,setNombre] = useState("");
    const[lista,setLista] = useState([]);

    const agregarNombre = (nombre) => { 
        if(nombre.trim() == "") return;
        setLista([...lista,{nombre}]);
        setNombre("");
    }

    const eliminarNombre = (nombreEliminar) => {
        setLista(lista.filter((item) => item.nombre != nombreEliminar));
    }

    return(
        <>
        <h1>Ejercicio 1: StudentList</h1>
        <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"/>
        <button onClick={() => agregarNombre(nombre)}>Añadir</button>
        <ul>
            {lista.map((item,index) => (
                <li key={index}>{item.nombre}
                <button onClick={() => eliminarNombre(item.nombre)}>Eliminar</button></li>
            ))}
        </ul>
        </>

);
}