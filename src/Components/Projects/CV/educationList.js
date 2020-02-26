import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

class EducationList extends Component {

    renderCourses (courses) {
        return (
            courses.map(course => (
                <Container key={course.id} className="course">
                    <h4>
                        {course.title}
                    </h4>
                    <h5>
                        {(course.status.length>0) && (course.status)}
                    </h5>
                    {course.projects.map(project => (
                        <Container key={project.id} className="project">
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                        </Container>
                    ))}
                </Container>
            ))
        )
    }

    render () {
        const courses = this.props
        return(
            <div className="EducationList">
                <h3>Education & Projects</h3>
                {(courses.length>0) && (this.renderCourses(courses))}
            </div>
        )
    }
}

export default EducationList