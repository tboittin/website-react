import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppNavbar from './AppNavbar';
import AppHeader from './AppHeader';
import Portfolio from './PortFolio';
import Skills from './Skills';
import Experiences from './Experiences';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AppHeader />
      <Portfolio />
      <Skills />
      <Experiences />
    </div>
  );
}

export default App;