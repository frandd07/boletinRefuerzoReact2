import { useState } from "react";
export default function UserTable(){
    const[nombre,setNombre] = useState("");
    const[email,setEmail] = useState("");
    const[edad,setEdad] = useState("");
    const[lista,setLista] = useState([]);

    const anadirUsuario = () => {
        if (nombre.trim() === "" || email.trim() === "" || edad.trim() === "") return;
        const nuevoUsuario = {nombre,email,edad};
        setLista([...lista,nuevoUsuario]);
        setNombre("");
        setEmail("");
        setEdad("");
    }

    const eliminarUsuario = (usuarioEliminar) => {
        setLista(lista.filter((item) => item.nombre != usuarioEliminar));
    }

return(
    <>
    <h1>Ejercicio 9: UserTable</h1>
    <form onSubmit={(e) => { e.preventDefault(); anadirUsuario(); }}>
        <input 
        type="text"
        value={nombre}
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}/>
        <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}/>
        <input 
        type="number"
        value={edad}
        placeholder="Edad"
        onChange={(e) => setEdad(e.target.value)}/>
        <input
        type="submit"
        value="Agregar"/>
    </form>
    <table>
    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.edad}</td>
                            <td>
                                <button onClick={() => eliminarUsuario(usuario.nombre)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
    </table>
    </>
);
}