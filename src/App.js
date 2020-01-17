import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppNavbar from './Components/AppNavbar';
import AppHeader from './Components/AppHeader';
import Portfolio from './Components/PortFolio';
import Skills from './Components/Skills';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      portfolio: [],
      skills: [],
      experiences: []
    }
  }
  render() {
    const {portfolio, skills, experiences} = this.state;
    return (
      <div className="App">
        <AppNavbar />
        <AppHeader />
        <Portfolio portfolio={portfolio} />
        <Skills skills={skills} />
        <Experiences experiences={experiences} />
        <Contact />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;