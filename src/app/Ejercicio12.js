import { useState } from "react";

export default function ThemeSelector() {
    const [tema, setTema] = useState("claro");

    const estilos = {
        claro: {
            backgroundColor: "#f0f0f0",
            color: "#000000"
        },
        oscuro: {
            backgroundColor: "#333333",
            color: "#ffffff"
        },
        colorido: {
            backgroundColor: "#ffcc00",
            color: "#0000ff"
        }
    };


    const cambiarTema = (nuevoTema) => {
        setTema(nuevoTema);
    };

    return (
        <div style={estilos[tema]}>
            <h1>Ejercicio 12: ThemeSelector</h1>
            <div>
                <button onClick={() => cambiarTema("claro")}>Tema Claro</button>
                <button onClick={() => cambiarTema("oscuro")}>Tema Oscuro</button>
                <button onClick={() => cambiarTema("colorido")}>Tema Colorido</button>
            </div>
        </div>
    );
}
