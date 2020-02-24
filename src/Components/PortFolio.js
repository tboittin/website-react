import React, { Component } from 'react'
import './Portfolio.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import { Card,  Col, Button } from 'react-bootstrap'
import XlModal from './Utilities/Modals/xlModal'
// import Calque from '../calque'


class Portfolio extends Component {
    
    renderProjects (projects) {
        let show = false
        return(
            <>
                {projects.map(project => (
                    <div key={project.id} className="p-4 h-25 w-25 d-inline-flex flex-wrap m-2">
                        <Card
                            className=""
                        >
                            <Card.Img variant="top" src={project.image} className="project"/>
                            <Button 
                                onClick={() => {
                                    console.log('show to true')
                                    console.log(show)
                                    show = true
                                    console.log(show)
                                }}
                            >
                                Modal
                            </Button>
                        </Card>
                        {this.renderModalProject(project, show)}
                    </div>
                ))}
            </>
        )
    }

    renderModalProject (project, show) {
        return(
            <XlModal project={project} show={show}/>
        )
        
    }

    render() {
        const {sectionOrder, positionOrder, projects} = this.props;
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
                        className=" text-center"
                    >
                        {(projects.length>0)&&(this.renderProjects(projects))}
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