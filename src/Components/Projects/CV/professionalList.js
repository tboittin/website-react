import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './professionalList.css'

class ProfessionalList extends Component {


    renderDev = (devExperience) => {
        return (
            <div>
                {devExperience.map(devExperience => (
                    <Container key={devExperience.id} className="experience pr-0">
                        <h4>
                            {devExperience.title}
                            {(devExperience.company.length>0)&&(' - ' + devExperience.company)}</h4>
                        <Container className="pr-0">
                            <p className="mb-1">{devExperience.country} - {devExperience.period}</p>
                            <p>{devExperience.description} </p>
                        </Container>
                    </Container>
                ))}
            </div>
        )
    }

    renderIstom = (istomExperience) => {
        return (
            <div>
                {istomExperience.map(istomExperience => (
                    <Container key={istomExperience.id} className="experience pr-0">
                        <h4>{istomExperience.title} {(istomExperience.company.length>0)&&(' - ' + istomExperience.company)}</h4>
                        <Container className="pr-0">
                            <p className="mb-1">{istomExperience.country} - {istomExperience.period}</p>
                            <p>{istomExperience.description} </p>
                        </Container>
                    </Container>
                ))}
            </div>
        )
    }

    reorientation = () => {
        return(
            <div className="reorientation">
                <hr />
                <h5 className="text-center">
                    Programming Reorientation - 2018
                </h5>
                <hr />
            </div>
        )
    }
    render () {
        return(
            <div className="ProfessionalList">
                <h3>Professional Experiences</h3>
                {(devExp.length > 0) && this.renderDev(devExp)}
                {((istomExp.length > 0) && (devExp.length > 0)) && reorientation()}
                {(istomExp.length > 0) && this.renderIstom(istomExp)}
            </div>
        )
    }
}

export default ProfessionalList