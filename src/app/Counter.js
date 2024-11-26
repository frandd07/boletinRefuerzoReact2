import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementar = () => setCount(count + 1);
    const decrementar = () => setCount(count - 1);
    const reiniciar = () => setCount(0);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}

export default Counter;
