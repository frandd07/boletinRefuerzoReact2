import { useState } from "react";

export default function ImageGallery({ imagenes }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguiente = () => {
    setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndiceActual((indiceAnterior) =>
      (indiceAnterior - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <>
      <h1>Ejercicio 7: ImageGallery</h1>
      
      <img
        src={imagenes[indiceActual]}
      />
      <div>
      <button onClick={anterior}>Anterior</button>
      <button onClick={siguiente}>Siguiente</button>
      </div>
  
    </>
  );
}
