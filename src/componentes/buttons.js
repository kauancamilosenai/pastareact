import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './button.css';

function PokeButton() { // criamos um botão em componentes para não termos que ficar repetindo o mesmo código toda vez que fomos usar ao mesmo protótipo de botão, apenas chamamos ele pela função
  return <button className="botao"></button> 
}

export default PokeButton;