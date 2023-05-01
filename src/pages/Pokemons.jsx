import React, {useEffect, useRef, useState} from "react";
import Menu from "../components/menu";
import Footer from "../components/footer"
import PokeCard from "../components/PokeCard";

import styles from "../css/index.module.css";

 const Pokemons = () => {


   const [pokemon, setPokemon] = useState([]);
   const [pokemonSelected, setPokemonSelected] = useState([]);
   const [pokeTypes, setPokeTypes] = useState([]);
   const [typeSelected, setTypeSelected] = useState([]);
   const [pokemonName, setPokemonName] = useState([]);
   const [pokemonObj, setPokemonObj] = useState();

   const poks = useRef(null);
   const poksTypes = useRef(null);
   const pokemonsReq = useRef(null);
   const carregaPokemons = useRef(null);
   
   var obj = {};

   useEffect(() => {
      async function carregaTipos() {
         const typesRep = await fetch("https://pokeapi.co/api/v2/type/");
         const types = await typesRep.json();

         setPokeTypes(types.results);

         //console.log(types.results);
      }

      carregaPokemons.current = async function (type) {
         if(type !== 'none'){
            pokemonsReq.current = await fetch(type);
         }else{
            pokemonsReq.current = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
         }
   
         const pokemons = await pokemonsReq.current.json();
         setPokemon(pokemons.pokemon);
   
         //console.log(pokemons.pokemon);
      }

      carregaTipos();
      //carregaPokemons.current();

   })

   



   function changePokemon(event) {
      setPokemonSelected(event.target.value);
   }

   function changeType(event) {
      setTypeSelected(event.target.value);
      carregaPokemons.current(event.target.value);
   }

    async function selectPokemon() {
      const pokemonUrl = pokemonSelected;

      const pokSelectedReq = await fetch(pokemonUrl);

      const pokemonStatus = await pokSelectedReq.json();

      var types = [];

      for(var type of pokemonStatus.types) {
         types.push(type.type.name)
      }

      obj = {
         id: pokemonStatus.id,
         img: pokemonStatus.sprites.front_default,
         name: pokemonStatus.name,
         moves: pokemonStatus.moves.slice(0,4),
         height: pokemonStatus.height,
         weight: pokemonStatus.weight,
         types: types
      }

      setPokemonObj(obj);

      setPokemonName(pokemonStatus.name);

      // alert(`O pokemon selecionado é: ${pokemon}`)
   }

    return(
      <>

      <Menu/>

      <div className={styles.container}>
         <h1>Pokemons</h1>
         <div className={styles.divPokemons}>
            <div className={styles.col5}>
               <label>Selecione um Tipo de Pokemon</label>   
               <select className={styles.selectType} value={typeSelected} onChange={changeType} ref={poksTypes}>
                  <option value='none'>Selecione um tipo de pokemon</option>
                  {pokeTypes.map((types) => (
                      <option key={types.name} value={types.url}>{types.name}</option>
                  ))}
               </select>
               <label>Selecione um Pokemon</label>
               <select className={styles.selectPokemon} value={pokemonSelected} onChange={changePokemon} ref={poks}>
                     <option>Selecione um Pokemon</option>
                  {pokemon.map((pokemon) => (
                     <option key={pokemon.pokemon.name} value={pokemon.pokemon.url}>{pokemon.pokemon.name}</option>
                  ))}
               </select>
               <button onClick={selectPokemon}>Selecione</button>

            </div>

            <div className={styles.imgPokemon}>
               <PokeCard info={pokemonObj} name={pokemonName}/>
               {/* {pokemonImg.length !== 0 ? (
                     <img src={pokemonImg} alt="pokemon_img" />

                  ) : (
                     <p>Selecione um pokemon e ele aparecerá aqui</p>
               )} */}
            </div>
         </div>
               
      </div>
      <Footer/>
      </>
      
    ) ;
 };

 export default Pokemons;