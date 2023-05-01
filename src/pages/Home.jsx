import React from "react";
import { Link } from "react-router-dom";
// import DropDownTeste from "../components/DropDownTeste";
import Menu from "../components/menu";
import Footer from "../components/footer";
import style from "../css/index.module.css";
import styleHome from "../css/home.module.css";

import pokeLogo from '../img/pokemon-png-logo.png';
import pikachuHome from '../img/pikachuHome.webp';

const Home = () => {
    return (
      <>
         <Menu/>
         <div className={style.container}>
            <div className={styleHome.logoContent}>
               <img className={styleHome.imgLogo} src={pokeLogo} alt="Logotipo do site" />
            </div>
            <div className={styleHome.contentHome}>
               <div className={styleHome.contentHomeTitle}>
                  <h1>Descubra mais sobre seus pokemons <span>favoritos</span> !</h1>
                  <div className={styleHome.btn}>
                     <Link to="/pokemons">Descubra</Link>
                     {/* <a href="/pokemons">Descubra</a> */}
                  </div>
               </div>
               <div>
                  <img src={pikachuHome} alt="" />
               </div>
            </div>
         </div>
         {/* <h1>Home</h1>
         <div className={styles.row}>
            <DropDownTeste lblName="Campos Extras" lblSize="670px"/>
         </div> */}
         <Footer/>
      </>
    );
 };

 export default Home;