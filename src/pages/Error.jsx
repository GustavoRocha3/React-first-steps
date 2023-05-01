import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/menu";
import Footer from "../components/footer";
import style from "../css/index.module.css";
import styleErro from "../css/erro.module.css";
import imgErro from "../img/equipeRocketErro-sem-fundo.png"

const Error = () => {
    return(
        <>
            <Menu/>
            <div className={style.container}>
                <div className={styleErro.contentErro}>
                    <div>
                        <h1>Ops, parece que a Equipe Rocket capturou essa página!</h1>
                        <div className={styleErro.btn}>
                            <Link to="/">Voltar</Link>
                        </div>
                    </div>
                    <img src={imgErro} alt="Imagem da equipe rocket machucada" />
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Error;