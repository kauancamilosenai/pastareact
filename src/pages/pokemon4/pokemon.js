import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from  'axios';
import './pokemon.css';

function Pokemon4() {

  const [pokemons, setPokemons] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 

useEffect(() => {
  const getData = async () => {
    try {const res = await
      axios.get('https://pokeapi.co/api/v2/pokemon/charmander');
      setPokemons(res.data);
      console.log('Success:', res.data);
      setLoading(false);
    }
    catch (err) {
      console.error("Error ao carregar API", err); 
      setLoading(false)
      setError(true)
    }
  };
  getData();
}, {}) 

  if (loading) return <div className='loader'>
    Carregando...
    </div>;
 
 if (error) return <div className='error'>
  ocorreu um erro inesperado
  </div>;

  return(
    <div className="pokemon">
      <h1>POKEMON CARD</h1>
      <div className="pokemon-container">
        <div className="pokemon-card">
          <h3>{pokemons.name}</h3>
          <h4>{pokemons.types[0].type.name}</h4>
          <img src={pokemons.sprites.front_shiny} alt={pokemons.name}/>
          <h3>{pokemons.stats[0].stat.name+' '+pokemons.stats[0].base_stat+' '+pokemons.stats[1].stat.name+' '+pokemons.stats[0].base_stat}</h3>
          
        </div>
      </div>
      <Link to="/pokemon">
        <button className="buttonBack"></button>
      </Link>
      <Link to="/">
        <button className="buttonHome"></button>
      </Link>
      <Link to="/pokemon2">
        <button className="buttonForward"></button>
      </Link>
    </div>
  );
}

export default Pokemon4;