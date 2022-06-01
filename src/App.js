import './App.css';
import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Nav />
        <div className='bigContainer'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
