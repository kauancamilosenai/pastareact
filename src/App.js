import React from "react";
import{Route, BrowserRouter, Routes}from "react-router-dom";
import Pokemon from "./pages/pokemon/pokemon"
import Treinador from "./pages/home/home"
import Pokemon2 from "./pages/pokemon2/pokemon2"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Treinador/>}/>
                <Route path="/pokemon" element={<Pokemon/>}/>
                <Route path="/pokemon2" element={<Pokemon2/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;