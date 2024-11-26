import TextCarousel from "./Ejercicio15";

export default function Frases(){
    
    const arrayFrases = ["Esta es la frase 1" , 
        "Esta es la frase 2 y me llamo Perico", 
        "Esta es la frase 3 y me llamo Fred",
        "Esta es la última frase del carrusel de frases"];
    
    return(
    <>
    <TextCarousel frases={arrayFrases} />
    </>
    );
}