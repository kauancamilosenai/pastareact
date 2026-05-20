import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from  'axios';
import './pokemon2.css';
import useEffectPokeAp from '../../hooks/useFetchPokeApi'

function Pokemon2() {

  const {pokemons, loading, error} = useEffectPokeAp("chimchar"); 
  const [setPokemons] = useState({}); 
  const [setLoading] = useState(true); 
  const [setError] = useState(false); 
  const paginaAtual = 2

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
      <Link to={`/pokemon${paginaAtual-1}`}>
        <button className="buttonBack"></button>
      </Link>
      <Link to="/">
        <button className="buttonHome"></button>
      </Link>
      <Link to={`/pokemon${paginaAtual+1}`}>
        <button className="buttonForward"></button>
      </Link>
    </div>
  );
}

export default Pokemon2;