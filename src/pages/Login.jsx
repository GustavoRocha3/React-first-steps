import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/menu";
import Footer from "../components/footer";
import style from "../css/index.module.css";

const Login = () => {
    const { slug } = useParams();

    return(
        <>
            <Menu/>
            <div className={style.container}>
                <h1>Login { slug }</h1>
            </div>
            <Footer/>
        </>
    ) 
 };

 export default Login;