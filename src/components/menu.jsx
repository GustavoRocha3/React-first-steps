import React from "react";
import { Link } from "react-router-dom";
import stylesMenu from "../css/menu.module.css";
import pokeLogo from '../img/pokemon-png-logo.png';
import pokeball from '../img/pokebola.png'


const Menu = () => {
    return (
        <nav className={stylesMenu.menu}>
            <img src={pokeball} alt="Pokebola imagem" />
            <div className={stylesMenu.menuItems}>
                <Link className={stylesMenu.hoverLine} to="/">Home</Link>
                <Link className={stylesMenu.hoverLine} to="/login">Login</Link>
                <Link className={stylesMenu.hoverLine} to="/pokemons">Pokemons</Link>
            </div>
            <img src={pokeLogo} alt="Pokemon Logo" />
        </nav>
    );
};

export default Menu;