import { useState, useEffect } from 'react';
import axios from 'axios';
import { async } from 'q';

function useFetchPokeapi(pokeid) {
  console.log('iniciando construção da pagina')
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [especies, setSpecies] = useState({});
  const [evolution, setEvolutions] = useState ({});
  const [myPokemon, setMyPokemon] = useState({});
  const [myType, setMyType] = useState('');

  //meu codigo funciona sem essa parte (seta para baixo)
useEffect(() => { //esse useEffect existe para colocarmos tipos personalizados dos pokemons de acordo com a API, sendo assim, será possível fazer nosso proprio agrupamento de pokemons
const getMyType = async () => {
  try {
    if(pokemons.types[0].type.name == 'normal' || pokemons.types[0].type.name == 'fighter'){
      setMyType('corpo');

    } else if (pokemons.types[0].type.name == 'psychic' || pokemons.types[0].type.name == 'fairy'){
      setMyType('mente');

    } else if (pokemons.types[0].type.name == 'ghost' || pokemons.types[0].type.name == 'dark'){
      setMyType('sombra');

    } else if (pokemons.types[0].type.name == 'grass' || pokemons.types[0].type.name == 'bug' || pokemons.types[0].type.name == 'poison'){
      setMyType('natureza');

    } else if (pokemons.types[0].type.name == 'rock' || pokemons.types[0].type.name == 'ground' || pokemons.types[0].type.name == 'steel'){
      setMyType('terra');

    } else if (pokemons.types[0].type.name == 'water' || pokemons.types[0].type.name == 'ice'){
      setMyType('agua');

    } else if (pokemons.types[0].type.name == 'fire'){
      setMyType('fogo');
      
    } else if (pokemons.types[0].type.name == 'electric' || pokemons.types[0].type.name == 'flying' || pokemons.types[0].type.name == 'dragon'){
      setMyType('tempestade');
    }
  } catch (err) {
    console.error(err);
  }
};
getMyType();
    }, [pokemons]);
// meu codigo funcionar antes entre esse codigo (seta para cima)


//PRIMEIRO
  useEffect(() => { // é o responsavel por pegar as api dos pokemons, transformando em id na pagina dos pokemons
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}`); //nessa linha o código esta tentando buscar a api do pokemon escolhido
        setPokemons(res.data);
        console.log('Success:', res.data);
        setLoading(false);
      }
      catch (err) { // caso não consiga pegar a api do pokemon o erro entra
        console.error("Erro ao carregar API", err);
        setLoading(false)
        setError(true)
      }
    };
    getData();
  }, [pokeid]);


//SEGUNDO
useEffect(() => { // é o responsavel por pegar as api dos pokemons, transformando em id na pagina dos pokemons
  const getSpecies = async () => {
    try {
      const res = await axios.get(pokemons.species.url, {}); //nessa linha o código esta tentando buscar a api do pokemon escolhido
      setSpecies(res.data);
      console.log('Success:', res.data);
    }
    catch (err) { // caso não consiga pegar a api do pokemon o erro entra
      console.error("Erro ao carregar API", err);
    }
  };
  getSpecies();
}, [pokemons]);


//TERCEIRO
useEffect(() => { // é o responsavel por pegar as api dos pokemons, transformando em id na pagina dos pokemons
  const getEvolutions = async () => {
    try {
      const res = await axios.get(especies.evolution_chain.url, {}); //nessa linha o código esta tentando buscar a api do pokemon escolhido
      setEvolutions(res.data);
      console.log('Success:', res.data);
    }
    catch (err) { // caso não consiga pegar a api do pokemon o erro entra
      console.error("Erro ao carregar API", err);
    }
  };
  getEvolutions();
}, [especies]);


//QUARTO
useEffect(() => {
  const setPoke = async () => {
    try {
      setMyPokemon({
        nome: pokemons.name,
        vida: pokemons.stats[0].base_stat,
        ataque: pokemons.stats[1].base_stat,
        tipo: myType,
        evolucao: [evolution.chain.evolves_to[0].species.name],
        imagem: pokemons.sprites.other['official-artwork'].front_default,
      });
    } catch (err) {
      console.error(err);
    }
  };
  setPoke();
      }, [evolution, pokemons, myType]);


  return { myPokemon, loading, error }
}


//QUINTO
//eEffect(() => {
//const setMyType = async () => {
//  try {
//    if(pokemons.tipo == 'normal' || pokemons.tipo == 'fire'){
//      oque que muda aqui zé = 'Corpo'
//    } if else (pokemons.tipo == 'Psychic')
//  } catch (err) {
//    console.error(err);
//  }
//};
//setMyType();
//    }, [ oque que vai esperar? ]);

export default useFetchPokeapi;