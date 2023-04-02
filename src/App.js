import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import Contact from "./Routes/contact";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
   <>
    <Routes>
    <Route path="/" element={<Home/>}/ > 
    <Route path="/contact" element={<contact/>}/ > 
    <Route path="/Projects" element={<Projects/>}/ > 
    <Route path="/About" element={<About/>}/ > 
    </Routes>
   </>
  );
}

export default App;
