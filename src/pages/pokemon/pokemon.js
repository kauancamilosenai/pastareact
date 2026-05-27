import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from  'axios';
import './pokemon.css';
import useEffectPokeApi from '../../hooks/useFetchPokeApi';
import { Position } from 'postcss';

function Pokemon() {
  const {id} = useParams();

  const {pokemons, loading, error} = useEffectPokeApi(id);
  const [setPokemons] = useState({});
  const [setLoading] = useState(true);
  const [setError] = useState(false); 

  // a partir daqui até a linha ! tentei fazer meus botões voltarem a funcionar 
  // quase acabando a lógica, falta aplicar dentro dos botões e corrigir o console.log(FINAL) que está dando erro em .pokemon

  const paginaAtual = [
    {position: 0 , pokemon: 'charmander'},
    {position: 1 , pokemon: 'chimchar'},
    {position: 2 , pokemon: 'abra'},
    {position: 3 , pokemon: 'terrakion'},
    {position: 4 , pokemon: 'seedot'},
    {position: 5 , pokemon: 'huntail'}
  ]
  const pokemonAtual = paginaAtual.find(poke => poke.pokemon === id).pokemon;
  const positionAtual = paginaAtual.find(poke => poke.pokemon === id).position;
  let forward = positionAtual
  let backward = positionAtual
  console.log(`pokemon atual : ${pokemonAtual}`)
  console.log(`position atual : ${positionAtual}`) 
  console.log(`FINAL: ${paginaAtual[positionAtual].pokemon}`)

  if(positionAtual == 0){
    forward++
    console.log("zero")
  } else if (positionAtual == paginaAtual.length-1) {
    backward--
    console.log('pessoa feliz')
  } else { 
    console.log('um')
    backward--
    forward++
  }
  console.log(`backward ${backward}`)
  console.log(`forward ${forward}`)
  //queria tentar criar uma logica que levasse o usuario ao proximo pokemon mas ainda não consegui produzi-la

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
        <Link to={`/pokemon/${paginaAtual[backward].pokemon}`}>
        <button className="buttonBack"></button>
      </Link>
      <Link to="/">
        <button className="buttonHome"></button>
      </Link>
      <Link to={`/pokemon/${paginaAtual[forward].pokemon}`}>
        <button className="buttonForward"></button>
      </Link>
    </div>
  );
}

export default Pokemon;