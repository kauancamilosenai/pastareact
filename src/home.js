import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import './home.css'

function Treinador(){
    return(
        <div className="titulo"> 
        <h1>Treinador</h1>
            <div className="imagem">
                <div className="info">
                <img src="https://cdn.meutimao.com.br/_upload/forum/2024/02/19/cassio_calca_quadrada_qq.jpg" alt="cassio bobe esponja"></img>
                <h2>Kauan</h2>
                <h2>9999+ anos</h2>
                <h2>Cassio</h2>
                <h2>tenho 1 poquemom só</h2>
                <h2>conquistas zeradas</h2>
                    <div><Link to="/pokemon">
                            <button className="botao"></button>
                        </Link>
                        <Link to="/pokemon2">
                            <button className="botao"></button>
                        </Link>
                        <Link to="/pokemon2">
                            <button className="botao"></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Treinador;