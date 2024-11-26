import { useState } from "react";

export default function ShoppingList() {
    const [producto, setProducto] = useState("");
    const [lista, setLista] = useState([]);

    const anadirProducto = (producto) => {
        if (producto.trim() === "") return;
        setLista([...lista, { nombre: producto, editing: false }]);
        setProducto("");
    };

    const eliminarProducto = (productoEliminar) => {
        setLista(lista.filter((item) => item.nombre !== productoEliminar));
    };

    const habilitarEdicion = (index) => {
        setLista(
            lista.map((item, i) => 
                i === index ? { ...item, editing: true } : item
            )
        );
    };

    const guardarProducto = (index, nuevoNombre) => {
        setLista(
            lista.map((item, i) =>
                i === index ? { ...item, nombre: nuevoNombre, editing: false } : item
            )
        );
    };

    return (
        <>
            <h1>Ejercicio 5: ShoppingList</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={producto}
                    onChange={(e) => setProducto(e.target.value)}
                    placeholder="Producto"
                />
                <input
                    type="submit"
                    value="Enviar"
                    onClick={() => anadirProducto(producto)}
                />
            </form>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item.editing ? (
                            <>
                                <input
                                    type="text"
                                    defaultValue={item.nombre}
                                    onBlur={(e) => guardarProducto(index, e.target.value)}
                                    autoFocus
                                />
                            </>
                        ) : (
                            <>
                                {item.nombre}
                                <button onClick={() => eliminarProducto(item.nombre)}>Eliminar</button>
                                <button onClick={() => habilitarEdicion(index)}>Editar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
