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
      experiences: [],
      sectionOrder: [
        {name: "header"},
        {name: "portfolio"},
        {name: "skills"},
        {name: "experiences"},
        {name: "contact"},
      ]
    }
  }
  render() {
    const {
      portfolio,
      skills,
      experiences,
      sectionOrder,
    } = this.state;
    return (
      <div className="App">
        <AppNavbar />
        <AppHeader 
          sectionOrder={sectionOrder}
          positionOrder={0}
        />
        <Portfolio
          portfolio={portfolio}
          sectionOrder={sectionOrder}
          positionOrder={1}
        />
        <Skills
          skills={skills}
          sectionOrder={sectionOrder}
          positionOrder={2}
        />
        <Experiences
          experiences={experiences}
          sectionOrder={sectionOrder}
          positionOrder={3}
        />
        <Contact
          sectionOrder={sectionOrder}
          positionOrder={4}
        />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;