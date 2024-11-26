import { useState } from "react";

export default function LoginForm(){

    const[usuario,setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const arrayUsuarios = ["fred","fran","freddy"];
    const arrayContrasenas = ["1234","5678","9,10,11,12"];
    const [mensaje,setMensaje] = useState("");

    const validarUsuario = (usuario,contrasena) => {
        const indice = arrayUsuarios.indexOf(usuario);
        if(indice !== -1 && arrayContrasenas[indice] === contrasena){
            setMensaje((`Bienvenido, ${usuario}`));
        }else{
            setMensaje("Usuario y/o contraseñas incorrectos")
        }
    }
return(
    <>
    <h1>Ejercicio 6: LoginForm</h1>
    <form 
    onSubmit={(e) => {e.preventDefault();
        validarUsuario(usuario,contrasena);
    }}
    >
        <input 
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}/>
         <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
    </form>
    <p>{mensaje}</p>
    </>
);
}