import React, {useState, useEffect, useRef} from "react";

import styles from "../index.module.css";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

function DdlContent () {
    const [repositorio, setRepositorio] = useState([]);
    const [content, setContent] = useState([]);

    const reps = useRef(null);
    const values = useRef(null);

    const trashIcon = <FaTrashAlt/>
    const plusIcon = <FaPlus/>


    function deleteRow(index) {
        const newRows = [...content];
        newRows.splice(index, 1);
        setContent(newRows)

    }

    useEffect(() => {
        async function carregaRepositorios() {
        const resposta = await fetch("https://api.github.com/users/GustavoRocha3/repos");

        const repositorios = await resposta.json();
        setRepositorio(repositorios);
        }
        carregaRepositorios();
    }, []);

    

    function addTable() {
        const repSelected = reps.current.value;
        const valueSelected = values.current.value;

        const newRow = (<tr>
                            <td>{repSelected}</td>
                            <td>{valueSelected}</td>
                            <td style={{display: "flex", justifyContent: "center"}}><a href="#" onClick={deleteRow(this)}>{trashIcon}</a></td>
                        </tr>)

        // Limpa o campo de valor
        values.current.value = "";

        if (content === []){
            return setContent(newRow);
        } else {
            

            const found = content.find(element => element === newRow);

            if (found === undefined) {
                return setContent([...content, newRow]);
            }
        }
    }

    return (
        <>
            <div className={styles.row}>
                <div className={styles.col5}>
                    <label>Repositórios</label>
                    <select ref={reps}>
                    {repositorio.map((repositorio) => (
                        <option key={repositorio.id}>{repositorio.name}</option>
                    ))}
                    </select>
                </div>
                <div className={styles.col}>
                    <label>Valor</label>
                    <input ref={values} type="text"></input>
                </div>
                <div className={styles.col1}>
                    <div className={styles.checkbox}>
                    <button onClick={addTable} className={`${styles.btnAdd} ${styles.btnRed}`}>
                        {plusIcon}
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
                           {content}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
        
    );
};

export default DdlContent;