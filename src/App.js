import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppNavbar from './Components/AppNavbar';
import AppHeader from './Components/AppHeader';
import Portfolio from './Components/PortFolio';
import Skills from './Components/Skills';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AppHeader />
      <Portfolio />
      <Skills />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;