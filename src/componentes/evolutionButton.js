import React, { useEffect, useState } from 'react';
import './evolutionButton.css';
import { Link } from 'react-router-dom';

function EvolutionPokeButton() {
  return <div >
    <Link><button className="evolutionBotao1"></button></Link>
    <Link><button className="evolutionBotao2"></button></Link>
    <Link><button className="evolutionBotao3"></button></Link>
  </div>
}

export default EvolutionPokeButton;