import logo from './logo.svg';
import './App.css';
import Main from './msin';
import Project from './projects'
import Skill from './Skill';
import { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sport from './SportSite';
import Port from './port';
import Dictionary from './dict';
import Hospital from './hos';
import University from './uni';
import HosProf from './hostProf';
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState(() => {

    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
<ThemeContext.Provider value = {{theme,toggleTheme}}>         
    <Router>
    <div id={theme}>
      <Routes>
      <Route path="/projects" element={<Project/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/skills" element={<Skill/>}/>
        <Route path="/sport" element={<Sport/>}/>
        <Route path="/port" element={<Port/>}/>
        <Route path="/dict" element={<Dictionary/>}/>
        <Route path="/hos" element={<Hospital/>}/>
        <Route path="/uni" element={<University/>}/>
        <Route path="/hosProf" element={<HosProf/>}/>
      </Routes>
    </div>
  </Router>
  </ThemeContext.Provider>
  );
}

export default App;
