import { useState } from "react";

export default function SurveySimulator2() {
  const [contadorSI, setContadorSi] = useState(0);
  const [contadorNO, setContadorNO] = useState(0);
  const [contadorTalVez, setContadorTalVez] = useState(0);

  const votaSI = () => setContadorSi(contadorSI + 3);
  const votaNO = () => setContadorNO(contadorNO + 1);
  const votaTalVez = () => setContadorTalVez(contadorTalVez + 2);

  const totalVotos = contadorSI + contadorNO + contadorTalVez;


  const porcentajeSI = totalVotos > 0 ? (contadorSI / totalVotos) * 100 : 0;
  const porcentajeNO = totalVotos > 0 ? (contadorNO / totalVotos) * 100 : 0;
  const porcentajeTalVez = totalVotos > 0 ? (contadorTalVez / totalVotos) * 100 : 0;

  return (
    <>
      <h1>Ejercicio 14: SurveySimulator (ampliado)</h1>
      <button onClick={votaSI}>SÍ</button>
      <button onClick={votaNO}>NO</button>
      <button onClick={votaTalVez}>TAL VEZ</button>
      <h5>VOTACIONES: </h5>
      <p>SÍ: {contadorSI} ({porcentajeSI.toFixed(2)}%)</p>
      <p>NO: {contadorNO} ({porcentajeNO.toFixed(2)}%)</p>
      <p>TAL VEZ: {contadorTalVez} ({porcentajeTalVez.toFixed(2)}%)</p>
    </>
  );
}
