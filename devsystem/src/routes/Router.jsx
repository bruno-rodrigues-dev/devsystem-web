import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Sobre from "../pages/Sobre/Sobre";
import Navbar from "../components/Navbar";

export default function Router() {
    return(
        <BrowserRouter>
            <Navbar />
             
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}