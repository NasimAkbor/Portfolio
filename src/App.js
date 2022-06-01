import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';


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
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
