import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from  'axios';
import './pokemon.css';
import useEffectPokeApi from '../../hooks/useFetchPokeApi';
import { Position } from 'postcss';
import EvolutionPokeButton from '../../componentes/evolutionButton.js'

function Pokemon() {
  const {id} = useParams();
  //const especie = axios.get(pokemons)
  //const {pokemonInGame, setPokemonInGame} = useState({})

  const {myPokemon, loading, error} = useEffectPokeApi(id);
  const [setPokemons] = useState({});
  const [setLoading] = useState(true);
  const [setError] = useState(false); 

  // a partir daqui até a linha ! tentei fazer meus botões voltarem a funcionar 
  // quase acabando a lógica, falta aplicar dentro dos botões e corrigir o console.log(FINAL) que está dando erro em .pokemon

  const paginaAtual = [ // fiz uma lista para manter os botões dentro da página funcionando
    {position: 0 , pokemon: 'charmander'},
    {position: 1 , pokemon: 'chimchar'},
    {position: 2 , pokemon: 'abra'},
    {position: 3 , pokemon: 'lapras'},
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

  if(positionAtual === 0){
    forward++
    console.log("zero")
  } else if (positionAtual === paginaAtual.length-1) {
    backward--
    console.log('pessoa feliz')
  } else { 
    console.log('um')
    backward--
    forward++
  }
  console.log(`backward ${backward}`)
  console.log(`forward ${forward}`)

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
        <div className={`pokemon-card ${myPokemon.tipo}`}>
          <h3>{myPokemon.nome}</h3>
          <h4>{myPokemon.tipo}</h4>
          <img src={myPokemon.imagem} alt={myPokemon.name}/>
          <h3>{'VIDA:' + ' ' +myPokemon.vida*10+ ' ' + 'ATK:' + '' + myPokemon.ataque}</h3>
        </div>
      </div>
        <EvolutionPokeButton></EvolutionPokeButton>
      <div>
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
    </div>
  );
}

export default Pokemon;