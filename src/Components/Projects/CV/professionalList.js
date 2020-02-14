import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './professionalList.css'

const ProfessionalList = () => {
    const devExperience = [
        {
            id: 1,
            title: "Freelance Web Developer",
            company: "",
            country: "France",
            period: "2019 - ongoing",
            description: `
                Web Freelancer - React - WordPress - Static Website - SEO
            `,
        },
        {
            id: 2,
            title: "COBOL Analyst Developer",
            company: "Adaming Conseil",
            country: "France",
            period: "2018 - 2019",
            description: `
                Product evolution as part of planned actions.
                Development and unit tests.
                Reporting.
                Technical correction related to user Demands.
                Go live patches.
            `,
        }
    ]
    
    const istomExperience = [
        {
            id: 1,
            title: "Agronomy Engineer",
            company: "IIRR",
            country: "Philippines",
            period: "2016",
            description: `
                Short term impact study - family farming support project - Cavite province.
                Monitoring tool development - better reporting & improved project management.            
            `,
        },
    ]

    const devRender = () => {
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

    const istomRender = () => {
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

    const reorientation = () => {
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

    return(
        <div className="ProfessionalList">
            <h3>Professional Experiences</h3>
            {(devExperience.length > 0) && devRender()}
            {((istomExperience.length > 0) && (devExperience.length > 0)) && reorientation()}
            {(istomExperience.length > 0) && istomRender()}
        </div>
    )
}

export default ProfessionalList