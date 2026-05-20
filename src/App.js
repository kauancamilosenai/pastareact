import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Treinador from "./pages/home/home"
import Pokemon from "./pages/pokemon/pokemon"
import Pokemon2 from "./pages/pokemon2/pokemon2"
import Pokemon3 from "./pages/pokemon3/pokemon3"
import Pokemon4 from "./pages/pokemon4/pokemon4"
import Pokemon5 from "./pages/pokemon5/pokemon5"
import Pokemon6 from "./pages/pokemon6/pokemon6"



function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Treinador/>}/>
                <Route path="/pokemon/:id" element={<Pokemon/>}/>
                <Route path="/pokemon2" element={<Pokemon2/>}/>
                <Route path="/pokemon3" element={<Pokemon3/>}/>
                <Route path="/pokemon4" element={<Pokemon4/>}/>
                <Route path="/pokemon5" element={<Pokemon5/>}/>
                <Route path="/pokemon6" element={<Pokemon6/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;