// import React, {useState, useEffect} from "react";

import styles from "./index.module.css";

// import CardTest from "./components/CardTest";
// import TestEvents from "./components/TestEvents";
// import ChangeCar from "./components/ChangeCar";
import Menu from "./components/menu";
import DropDownTeste from "./components/DropDownTeste";


function App() {

  // const [color, setColor] = useState("vermelho")
  // const [repositorio, setRepositorio] = useState([]);

  // useEffect(() => {
  //   async function carregaRepositorios() {
  //     const resposta = await fetch("https://api.github.com/users/GustavoRocha3/repos");

  //     const repositorios = await resposta.json();
  //     setRepositorio(repositorios);
  //   }
  //   carregaRepositorios();
  // }, []);

  return (
    <>
      <Menu/>
      {/* <h1 className={styles.title}>Sou um título</h1>
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
        </ul> */}
      <div className={styles.row}>
        <DropDownTeste lblName="Campos Extras" lblSize="670px"/>
      </div>

      <details>
        <summary>Clique Aqui</summary>
        <p>teste</p>
      </details>
    </>
  );
}

export default App;
