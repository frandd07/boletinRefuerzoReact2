"use client"
import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "./Ejercicio1";
import Ejercicio1UsandoImmer from "./Ejercicio1UsandoImmer";
import LimitedCounter from "./Ejercicio2";
import AverageCalculator from "./Ejercicio3";
import SurveySimulator from "./Ejercicio4";
import ShoppingList from "./Ejercicio5";
import LoginForm from "./Ejercicio6";
import UserTable from "./Ejercicio9";
import GuessTheNumber from "./Ejercicio10";
import TimeCounter from "./Ejercicio11";
import ThemeSelector from "./Ejercicio12";
import LiveValidationForm from "./Ejercicio13";
import Imagenes from "./Imagenes";
import Frases from "./Frases";
import MultiCounter from "./Ejercicio8";
import SurveySimulator2 from "./Ejercicio14";


export default function Home() {
  return (
    <div className={styles.page}>
      <StudentList/>
      <Ejercicio1UsandoImmer/>
      <LimitedCounter/> 
      <AverageCalculator/>
      <SurveySimulator/>
      <ShoppingList/>
      <LoginForm/>
      <Imagenes/>
      <MultiCounter/>
      <UserTable/>
      <GuessTheNumber/>
      <TimeCounter/>
      <ThemeSelector/>
      <LiveValidationForm/>
      <SurveySimulator2/>
      <Frases/>
    </div>
  );
}
