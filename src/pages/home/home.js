//área dos imports, necessario caso queria usar algum componente de react
import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import './home.css'
import PokeButton from '../../componentes/buttons.js'

function Treinador(){
    return( //essa parte é html, então de certa forma foi tranquila de fazer
        <div className="titulo"> 
        <h1>Treinador</h1> {/* essa parte é a criação da base da carta pokemon */ }
            <div className="imagem">
                <div className="info">
                <img src="https://cdn.meutimao.com.br/_upload/forum/2024/02/19/cassio_calca_quadrada_qq.jpg" alt="cassio bobe esponja"></img>
                <h2>Kauan</h2>
                <h2>9999+ anos</h2>
                <h2>Cassio</h2>
                <h2>tenho 1 poquemom só</h2>
                <h2>conquistas zeradas</h2>
                    <div> {/* parte dos links adicionam rota de navegação sendo cada um a carta de um pokemon diferente */}
                          {/* já o pokeButton é uma função que foi criada em 'componentes'  */}
                        <Link to='./pokemon/charmander'><PokeButton></PokeButton></Link> 
                        <Link to='./pokemon/chimchar'><PokeButton></PokeButton></Link>
                        <Link to='./pokemon/abra'><PokeButton></PokeButton></Link>
                        <Link to='./pokemon/terrakion'><PokeButton></PokeButton></Link>
                        <Link to='./pokemon/seedot'><PokeButton></PokeButton></Link>
                        <Link to='./pokemon/huntail'><PokeButton></PokeButton></Link>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default Treinador;