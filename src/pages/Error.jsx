import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
import style from "../css/index.module.css";

const Error = () => {
    return(
        <>
            <Menu/>
            <div className={style.container}>
                <h1>Ops, página não encontrada!</h1>
            </div>
            <Footer/>
        </>
    )
};

export default Error;