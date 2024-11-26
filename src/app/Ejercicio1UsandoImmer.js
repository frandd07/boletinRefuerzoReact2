import { useImmer } from "use-immer";

export default function Ejercicio1UsandoImmer() {
  const [lista, updateLista] = useImmer({
    nombre: "", 
    estudiantes: []
  });

  const agregarNombre = () => {
    if (lista.nombre.trim() === "") return;
    updateLista(draft => {
      draft.estudiantes.push({ nombre: draft.nombre });
      draft.nombre = ""; 
    });
  };

  const eliminarNombre = (nombreEliminar) => {
    updateLista(draft => {
      draft.estudiantes = draft.estudiantes.filter(item => item.nombre !== nombreEliminar); 
    });
  };

  return (
    <>
      <h1>Ejercicio 1: Usando Immer</h1>
      <input
        type="text"
        value={lista.nombre}
        onChange={(e) => updateLista(draft => { draft.nombre = e.target.value })} 
        placeholder="Nombre"
      />
      <button onClick={agregarNombre}>Añadir</button>

      <ul>
        {lista.estudiantes.map((item, index) => (
          <li key={index}>
            {item.nombre}
            <button onClick={() => eliminarNombre(item.nombre)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
