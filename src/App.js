import React from "react";
import{Route, BrowserRouter, Routes}from "react-router-dom";
import Pokemon from "./pokemon"
import Treinador from "./home"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Treinador/>}/>
                <Route path="/home" element={<Treinador/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;