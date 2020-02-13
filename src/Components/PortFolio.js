import React, { Component } from 'react'
import './Portfolio.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import { Card, Button, Col } from 'react-bootstrap'

import colmarThumb from './colmaracademy-responsivewebpic-thumb.png'

const projects = [
    {
        id: 1,
        title: "Colmar Academy",
        course: "CodeCademy - Web Development Path",
        description: "A flexbox website featuring the non existent Colmar Academy.",
        image: {colmarThumb},
        link:"",
    },
    {
        id: 2,
        title: "Excursion",
        course: "CodeCademy - Web Development Path",
        description: "A promotional page for a fictional app called Excursion.",
        image:"",
        link:"",
    },
    {
        id: 3,
        title: "FitActive",
        course: "OpenClassroom - Create a modern and professional website with WordPress",
        description: "It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.",
        image:"",
        link:"",
    },
    {
        id: 4,
        title: "ravenous",
        course: "CodeCademy - React course",
        description: "ravenous description.",
        image:"",
        link:"",
    },
    {
        id: 5,
        title: "jammming",
        course: "CodeCademy - React course",
        description: "jammming description.",
        image:"",
        link:"",
    },
    {
        id: 6,
        title: "Movie DB",
        course: "Udemy - Complete Next.js with React & Node",
        description: "Movie DB description.",
        image:"",
        link:"",
    },
]

class ProjectsRender extends Component {
    render () {
        return(
            <React.Fragment>
                {projects.map(project => (
                    <Card key={project.id} className="h-25 w-25 d-inline-flex flex-wrap m-2">
                        <Card.Img variant="top" src={project.image}/>
                        <a href={project.link}><Card.Title> {project.title} </Card.Title></a>
                        <Card.Text> {project.description} </Card.Text>
                        <Button variant="primary">Have a look !</Button>
                    </Card>
                ))}
            </React.Fragment>
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