import React from "react";
import { Link } from "react-router-dom";
import stylesMenu from "../menu.module.css";


const Menu = () => {
    return (
        <nav>
            <ul className={stylesMenu.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;