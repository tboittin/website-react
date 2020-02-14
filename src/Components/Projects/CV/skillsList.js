import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import './skillsList.css'
import { Container } from 'react-bootstrap'
// import MapSkills from './mapSkills'


class SkillsList extends Component {

    renderSkills (skills) {
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
    }
    
    render () {
        return(
            <React.Fragment>
                {(skills.length>0)&&(this.renderSkills(skills))}
            </React.Fragment>
        )
    }
}

Skills.propTypes = {
    skills: PropTypes.array,
}


export default SkillsList