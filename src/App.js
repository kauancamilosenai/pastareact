import react, { useState, useEffect } from 'react';
import axios from 'axion';
import './App.css';

const [pokemons, setPokemons] = useState ({});
conste [loading, setLoading] = useState (true)
const [error, setError] = useState (false)  

userEffect(() => {
  const getData = async () => {
    try {
      const res = await
    axios.get('https//pokeapi.co/api/v2/pokemon/ditto');
        serPokemons(res.data);
        console.log('success:', res.data);
        setLoading(false);
    }
    catch (err)  {
      console.error ("erro ao carregar API", err);
      setLoading(false)
    setError (true)
    }
  };
  getData();
}, {});

function App() {

  if (loading) return <div 
  className="loader"> carregando pokedex...
  </div>;

  if (error) return <div className="error">
  ocorreu um erro inesperado
  </div>

  return (
    <div className="App">
    <h1>pokemon</h1>
    </div>
  );
}

export default App;