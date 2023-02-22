import React, {useState, useEffect} from "react";
import styles from "./index.module.css";
import CardTest from "./CardTest";
import TestEvents from "./TestEvents";
import ChangeCar from "./ChangeCar";
import Menu from "./menu";


function App() {

  const [color, setColor] = useState("vermelho")
  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    async function carregaRepositorios() {
      const resposta = await fetch("https://api.github.com/users/GustavoRocha3/repos");

      const repositorios = await resposta.json();
      setRepositorio(repositorios);
    }
    carregaRepositorios();
  }, []);

  return (
    <>
      <Menu/>
      <h1 className={styles.title}>Sou um título</h1>
      <p>Minha cor favoria é {color}</p>
      <CardTest title="Teste1"/>
      <CardTest title="React"/>
      <CardTest title="JavaScript"/>
      <br/>
      <button type="button" onClick={() => setColor("azul")}>Mudar a cor</button>
      <TestEvents/>
      <br/>
      <br/>
      <br/>
      <ChangeCar/>
      
      <ul>
        {repositorio.map((repositorio) => (
          <li key={repositorio.id}>{repositorio.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
