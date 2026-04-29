import React, { useState, useEffect } from 'react';
import axios from  'axios';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 

useEffect(() => {
  const getData = async () => {
    try {const res = await
      axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur');
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
  </div>

  return (
    <div className="App">
      <h1> POKEMON list! </h1>
    </div>
  );
}

export default App;