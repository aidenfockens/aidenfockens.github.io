import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Assignments from './pages/Assignments';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assignments" element ={<Assignments/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;