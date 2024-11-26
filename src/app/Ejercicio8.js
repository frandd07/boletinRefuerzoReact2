import { useState } from 'react';
import Counter from './Counter'; 

function MultiCounter() {
    const [contadores, setContadores] = useState([]);

    const agregarContador = () => {
        setContadores([...contadores, <Counter key={contadores.length} />]);
    };

    return (
        <div>
            <h1>Ejercicio 8 : MultiCounter</h1>
            <button onClick={agregarContador}>Agregar Contador</button>
            <div>
                {contadores}
            </div>
        </div>
    );
}

export default MultiCounter;
