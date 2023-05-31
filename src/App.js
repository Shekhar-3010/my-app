import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import Contact from "./Routes/contact";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

function App() {
  return (
   <>
    
    <Routes>

    <Route path="/" element={<Home/>}/ > 
    <Route path="/contact" element={<Contact/>}/ > 
    <Route path="/projects" element={<Projects/>}/ > 
    <Route path="/about" element={<About/>}/ > 
    <Route path="/Skills" element={<Skills/>}/ > 

    
    </Routes>
    

   
   </>
  );
}

export default App;
