import React, {useState, useEffect, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppNavbar from './Components/AppNavbar';
import AppHeader from './Components/AppHeader';
import Portfolio from './Components/PortFolio';
import SkillsSection from './Components/SkillsSection';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import ScrollToTop from './Components/Navigation/ScrollToTop';


import { COURSES_DATA } from './Data/courses'
import { SKILLS_DATA } from './Data/skills'
import { INFOS_DATA } from './Data/infos'
import { TOOLS_DATA } from './Data/tools'
import { DEVEXP_DATA } from './Data/devExperience'
import { ISTOMEXP_DATA } from './Data/istomExperience'
import { PROJECTS_DATA } from './Data/projects'

import PortfolioPortage from './Components/Portfolio-portage';

class App extends Component {
  constructor (props) {
    super(props)
    this.state={
      courses: COURSES_DATA,
      skills: SKILLS_DATA,
      infos: INFOS_DATA,
      tools: TOOLS_DATA,
      devExp: DEVEXP_DATA,
      istomExp: ISTOMEXP_DATA,
      projects: PROJECTS_DATA,
      sectionOrder: [
        {name: "header"},
        {name: "portfolio"},
        {name: "skills"},
        {name: "experiences"},
        {name: "contact"},
      ]
    }
  }

  render(){
    const {sectionOrder, devExp, istomExp, courses, infos, skills, tools} = this.state
    return (
      <div className="App">
        <AppNavbar />
        <AppHeader 
          sectionOrder={sectionOrder}
          positionOrder={0}
          devExp={devExp}
          istomExp={istomExp}
          courses={courses}
          infos={infos}
          skills={skills}
          tools={tools}
        />
        <PortfolioPortage
          // projects={projects}
          sectionOrder={sectionOrder}
          positionOrder={1}
        />
        <SkillsSection
          skills={skills}
          tools={tools}
          sectionOrder={sectionOrder}
          positionOrder={2}
        />
        <Experiences
          devExp={devExp}
          istomExp={istomExp}
          courses={courses}
          sectionOrder={sectionOrder}
          positionOrder={3}
        />
        <Contact
          infos={infos}
          sectionOrder={sectionOrder}
          positionOrder={4}
        />
        <ScrollToTop />
      </div>
    )
  }
}

export default App;