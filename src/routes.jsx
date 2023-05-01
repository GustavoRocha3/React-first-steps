import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Pokemons from "./pages/Pokemons";
import Error from "./pages/Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="login/:slug" element={<Login/>}/>
            <Route path="pokemons" element={<Pokemons/>}/>
        </Routes>
    );
};

export default AppRoutes;