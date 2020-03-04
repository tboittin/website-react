import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

class EducationListHard extends Component {

    // renderUdemyNext () {
    //     return(
    //         <Container className="course">
    //             <h4>
    //                 Udemy - Complete Next.js with React & Node
    //             </h4>
    //             <h5>
    //                 ongoing
    //             </h5>
    //             <Container >
    //                 <h5>Movie DB</h5>
    //                 <p className="text-justify">
    //                     Movie DB description.
    //                 </p>
    //             </Container>
    //         </Container>
    //     )
    // }

    renderCodeCademyReact () {
        return(
            <Container className="course text-left">
                <h4>
                    CodeCademy - React course
                </h4>
                <h5>
                    2019
                </h5>
                <Container >
                    <h5>ravenous</h5>
                    <p className="text-justify">
                        ravenous description.
                    </p>
                </Container>
                <Container >
                    <h5>jammming</h5>
                    <p className="text-justify">
                        jammming description.
                    </p>
                </Container>
            </Container>
        )
    }

    renderCodecademyWeb(){
        return(
            <Container className="course text-left">
                <h4>
                    CodeCademy - Web Development Path
                </h4>
                <h5>
                    2019
                </h5>
                <Container >
                    <h5>Colmar Academy</h5>
                    <p className="text-justify">
                    A flexbox website featuring the fictional Colmar Academy.
                    </p>
                </Container>
                <Container >
                    <h5>Excursion</h5>
                    <p className="text-justify">
                        A promotional page for a fictional app called Excursion.
                    </p>
                </Container>
            </Container>
        )
    }

    renderOpenClassroomWordpress(){
        return(
            <Container className="course text-left">
                <h4>
                    OpenClassroom - Create a modern and professional website with WordPress
                </h4>
                <h5>
                    2019
                </h5>
                <Container className="FitActive">
                    <h5>FitActive</h5>
                    <p className="text-justify">
                        It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it more easily.
                    </p>
                </Container>
            </Container>
        )
    }

    render () {
        return(
            <div className="EducationList">
                <h3>Education & Projects</h3>
                {/* {this.renderUdemyNext()} */}
                {this.renderCodeCademyReact()}
                {this.renderCodecademyWeb()}
                {this.renderOpenClassroomWordpress()}
            </div>
        )
    }
}

export default EducationListHard