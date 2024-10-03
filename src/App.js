import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience'; // Keep this if you still want a separate route for Assignments
import Projects from './pages/Projects'; // Optional, only needed if Projects is a separate page
import Contact from './pages/Contact'; // Optional, only needed if Contact is a separate page
import Assignments from './pages/Assignments';
import './App.css';

// Helper function to scroll to sections
const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pathname === "/work-experience") {
      document.getElementById("work-experience")?.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === "/projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === "/contact"){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }, [pathname]);

  return null;
};
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToSection /> {/* Handle smooth scrolling */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<About />} />
          <Route path="/work-experience" element={<About />} />
          <Route path="/contact" element={<About />} />
          <Route path="/assignments" element ={<Assignments/>}/>
        </Routes>
      </div>  
    </Router>
  );
}

export default App;