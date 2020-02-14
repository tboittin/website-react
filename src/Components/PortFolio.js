import React, { Component } from 'react'
import './Portfolio.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import { Card, Button, Col } from 'react-bootstrap'

import colmarThumb from '../img/colmaracademy-responsivewebpic-thumb.png'
import excursionThumb from '../img/excursion-thumb.png'
import fitactiveThumb from '../img/FitActive-thumb.png'
import cabin from '../img/cabin.png'
import cake from '../img/cake.png'
import circus from '../img/circus.png'
import Calque from '../calque'

const projects = [
    {
        id: 1,
        title: "Colmar Academy",
        course: "CodeCademy - Web Development Path",
        description: "A flexbox website featuring the non existent Colmar Academy.",
        image: colmarThumb,
        link:"",
    },
    {
        id: 2,
        title: "Excursion",
        course: "CodeCademy - Web Development Path",
        description: "A promotional page for a fictional app called Excursion.",
        image: excursionThumb,
        link:"",
    },
    {
        id: 3,
        title: "FitActive",
        course: "OpenClassroom - Create a modern and professional website with WordPress",
        description: "It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.",
        image: fitactiveThumb,
        link:"",
    },
    {
        id: 4,
        title: "ravenous",
        course: "CodeCademy - React course",
        description: "ravenous description.",
        image: cabin,
        link:"",
    },
    {
        id: 5,
        title: "jammming",
        course: "CodeCademy - React course",
        description: "jammming description.",
        image: cake,
        link:"",
    },
    {
        id: 6,
        title: "Movie DB",
        course: "Udemy - Complete Next.js with React & Node",
        description: "Movie DB description.",
        image: circus,
        link:"",
    },
]

class ProjectsRender extends Component {
    render () {
        return(
            <div className="p-4 text-center">
                {projects.map(project => (
                    <Card key={project.id} className="h-25 w-25 d-inline-flex flex-wrap m-2">
                        <Calque>{project.title}</Calque>
                        <Card.Img variant="top" src={project.image} className="project"/>
                        {/* <a href={project.link}><Card.Title> {project.title} </Card.Title></a>
                        <Card.Text> {project.description} </Card.Text>
                        <Button variant="primary">Have a look !</Button> */}
                    </Card>
                ))}
            </div>
        )
    }
}

class Portfolio extends Component {
    

    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <section id="portfolio">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="portfolioContent">
                    <Col
                        xs={{
                            span:10,
                            offset:1,
                        }}
                    >
                        <ProjectsRender />
                    </Col>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default Portfolio