import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Treinador from "./pages/home/home"
import Pokemon from "./pages/pokemon/pokemon"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Treinador/>}/>
                <Route path="/pokemon/:id" element={<Pokemon/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;