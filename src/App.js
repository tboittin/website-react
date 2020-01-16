import React from 'react';
import './App.scss';
import AppNavbar from './AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './AppHeader';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AppHeader/>
    </div>
  );
}

export default App;
