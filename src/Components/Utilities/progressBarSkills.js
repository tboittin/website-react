import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ProgressBar } from 'react-bootstrap'

class ProgressBarSkills extends Component {
    renderProgressBar (skills, variant) {
        return skills.map(skill => (
            <Container key={skill.id} className="h-25 w-50">
                <h4>{skill.name}</h4>
                <ProgressBar striped variant={variant} now="100"/>
            </Container>
        ))
    }
    
    render () {
        const {skills, variant} = this.props
        return (
            <>
                {this.renderProgressBar(skills, variant)}
            </>
        )
    }
}

ProgressBarSkills.propTypes = {
    skills: PropTypes.array,
}

export default ProgressBarSkills