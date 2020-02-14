import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

class MapSkills extends Component {
    skillsMapping(skills) {
        return skills.map(skill => (
            <li key={skill.id}>{skill.name}</li>
        ))
    }
    
    render (skills) {
        {console.log(skills)}
        return (
            <ul className="pl-0 text-center d-flex flex-wrap justify-content-around">
                {this.skillsMapping(skills)}
            </ul>
        )
    }
}

MapSkills.propTypes = {
    skills: PropTypes.array,
}

export default MapSkills