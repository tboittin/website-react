import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import './skillsList.css'
import { Container } from 'react-bootstrap'
// import MapSkills from './mapSkills'


class SkillsListHard extends Component {

    renderSkills (skills) {
        return(
            <div className="skills">
                {/* <h3>Skills</h3> */}
                <Container>
                    <ul className="pl-0 text-center d-flex flex-wrap justify-content-around">
                        {skills.map(skill => (
                            <li key={skill.id} className="m-1 badge-pill badge-secondary">{skill.name}</li>
                        ))}
                    </ul>
                {/* <MapSkills skills={skills} /> */}
                </Container>
            </div>
        )
        
    }
    
    render () {
        // const skills = this.props
        return(
            <React.Fragment>
                <div className="skills">
                    <Container>
                        <ul className="pl-0 text-center d-flex flex-wrap justify-content-around">
                            <li className="m-1 badge-pill badge-secondary">Autodidact</li>
                            <li className="m-1 badge-pill badge-secondary">French & English</li>
                        </ul>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default SkillsListHard