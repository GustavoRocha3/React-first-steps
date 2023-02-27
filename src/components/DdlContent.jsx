import React, {useState, useEffect} from "react";

import styles from "../index.module.css";
import { FaPlus } from "react-icons/fa";

function DdlContent () {
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
            <div className={styles.row}>
                <div className={styles.col5}>
                    <label>Repositórios</label>
                    <select>
                    {repositorio.map((repositorio) => (
                        <option key={repositorio.id}>{repositorio.name}</option>
                    ))}
                    </select>
                </div>
                <div className={styles.col}>
                    <label>Valor</label>
                    <input type="text"></input>
                </div>
                <div className={styles.col1}>
                    <div className={styles.checkbox}>
                    <button className={`${styles.btnAdd} ${styles.btnRed}`}>
                        <FaPlus/>
                    </button>
                    </div>
                </div>
            </div>
            <br/>
            <div className={styles.row}>
                <div className={`${styles.dvTable} ${styles.col}`}>
                    <table className={styles.tableIcon} style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <td>Repositórios</td>
                                <td>Valor</td>
                                <td style={{width: "40px"}}></td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
        
    );
};

export default DdlContent;