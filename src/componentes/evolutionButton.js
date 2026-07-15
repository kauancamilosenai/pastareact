import React, { useEffect, useState } from 'react';
import './evolutionButton.css';
import { Link } from 'react-router-dom';

function EvolutionPokeButton() {
  return <div >
    <Link to="/pokemon/"><button className="evolutionBotao1"></button></Link>
    <Link to="/pokemon/"><button className="evolutionBotao2"></button></Link>
    <Link to=";;;;/;lo"><button className="evolutionBotao3"></button></Link>
  </div>
}

export default EvolutionPokeButton;