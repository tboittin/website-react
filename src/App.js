import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppNavbar from './Components/AppNavbar';
import AppHeader from './Components/AppHeader';
import Portfolio from './Components/PortFolio';
import SkillsSection from './Components/SkillsSection';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';
import ScrollToTop from './Components/Navigation/ScrollToTop';

import { getCourses } from './Data/courses'
import { getSkills } from './Data/skills'
import { getInfos } from './Data/infos'
import { getTools } from './Data/tools'
import { getDevExp } from './Data/devExperience'
import { getIstomExp } from './Data/istomExperience'
import { getProjects } from './Data/projects'

const App = () => {
  const [courses, setCourses] = useState([])
  const [skills, setSkills] = useState([])
  const [infos, setInfos] = useState({})
  const [tools, setTools] = useState([])
  const [devExp, setDevExp] = useState([])
  const [istomExp, setIstomExp] = useState([])
  const [projects, setProjects] = useState([])
  const [count, setCount] = useState(0)
  const [sectionOrder, setSectionOrder] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resCourses = await getCourses()
      setCourses(resCourses)
      const resSkills = await getSkills()
      setSkills(resSkills)
      const resInfos = await getInfos()
      setInfos(resInfos)
      const resTools = await getTools()
      setTools(resTools)
      const resDevExp = await getDevExp()
      setDevExp(resDevExp)
      const resIstomExp = await getIstomExp()
      setIstomExp(resIstomExp)
      const resProjects = await getProjects()
      setProjects(resProjects)
    }
    fetchData()
    setSectionOrder([
      {name: "header"},
      {name: "portfolio"},
      {name: "skills"},
      {name: "experiences"},
      {name: "contact"},
    ])
  
  }, [count])

  return (
    <div className="App">
      <AppNavbar />
      <AppHeader 
        sectionOrder={sectionOrder}
        positionOrder={0}
      />
      <Portfolio
        projects={projects}
        sectionOrder={sectionOrder}
        positionOrder={1}
      />
      <SkillsSection
        skills={skills}
        sectionOrder={sectionOrder}
        positionOrder={2}
      />
      <Experiences
        devExp={devExp} istomExp={istomExp}
        sectionOrder={sectionOrder}
        positionOrder={3}
      />
      <Contact
        sectionOrder={sectionOrder}
        positionOrder={4}
      />
      <ScrollToTop />
    </div>
  )
}

// class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       sectionOrder: [
//         {name: "header"},
//         {name: "portfolio"},
//         {name: "skills"},
//         {name: "experiences"},
//         {name: "contact"},
//       ]
//     }
//   }

//   render() {
//     const {
//       portfolio,
//       skills,
//       experiences,
//       sectionOrder,
//     } = this.state;
//     return (
//       <div className="App">
//         <AppNavbar />
//         <AppHeader 
//           sectionOrder={sectionOrder}
//           positionOrder={0}
//         />
//         <Portfolio
//           portfolio={portfolio}
//           sectionOrder={sectionOrder}
//           positionOrder={1}
//         />
//         <SkillsSection
//           skills={skills}
//           sectionOrder={sectionOrder}
//           positionOrder={2}
//         />
//         <Experiences
//           experiences={experiences}
//           sectionOrder={sectionOrder}
//           positionOrder={3}
//         />
//         <Contact
//           sectionOrder={sectionOrder}
//           positionOrder={4}
//         />
//         <ScrollToTop />
//       </div>
//     );
//   }
// }

export default App;