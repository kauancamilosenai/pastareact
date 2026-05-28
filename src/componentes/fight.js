import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './fight.css';

function FightButton() { // criamos um botão em componentes para não termos que ficar repetindo o mesmo código toda vez que fomos usar ao mesmo protótipo de botão, apenas chamamos ele pela função
  return <button className="fight"></button> 
}

export default FightButton;