import { useState } from "react";

function ChangeCar() {
        const [car, setCar] = useState({
            brand: "Ford",
            model: "Fiesta",
            year: "1995",
            color: "Cinza",
        });
    return (
        <>
            <p>Comprei um {car.model} {car.color} da {car.brand}, fabricado em {car.year}</p>
            <button type="button" onClick={() => setCar({...car, brand: "Chevrolet", model: "Camaro", year: "2014", color: "Amarelo"})}>Trocar de carro</button>
        </>
    );
}

export default ChangeCar;

