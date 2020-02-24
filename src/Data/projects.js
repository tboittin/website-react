import colmarThumb from '../img/colmaracademy-responsivewebpic-thumb.png'
import excursionThumb from '../img/excursion-thumb.png'
import fitactiveThumb from '../img/FitActive-thumb.png'
import cabin from '../img/cabin.png'
import cake from '../img/cake.png'
import circus from '../img/circus.png'

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Colmar Academy",
    course: "CodeCademy - Web Development Path",
    description: "A flexbox website featuring the non existent Colmar Academy.",
    image: colmarThumb,
    content: "",
    skillsUsed: "",
    link:"",
},
{
    id: 2,
    title: "Excursion",
    course: "CodeCademy - Web Development Path",
    description: "A promotional page for a fictional app called Excursion.",
    image: excursionThumb,
    content: "",
    skillsUsed: "",
    link:"",
},
{
    id: 3,
    title: "FitActive",
    course: "OpenClassroom - Create a modern and professional website with WordPress",
    description: "It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.",
    image: fitactiveThumb,
    content: "",
    skillsUsed: "",
    link:"",
},
{
    id: 4,
    title: "ravenous",
    course: "CodeCademy - React course",
    description: "ravenous description.",
    image: cabin,
    content: "",
    skillsUsed: "",
    link:"",
},
{
    id: 5,
    title: "jammming",
    course: "CodeCademy - React course",
    description: "jammming description.",
    image: cake,
    content: "",
    skillsUsed: "",
    link:"",
},
{
    id: 6,
    title: "Movie DB",
    course: "Udemy - Complete Next.js with React & Node",
    description: "Movie DB description.",
    image: circus,
    content: "",
    skillsUsed: "",
    link:"",
},
]

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve (PROJECTS_DATA)
    }, 100)
  })
}