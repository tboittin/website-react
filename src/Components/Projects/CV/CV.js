import './custom.scss'
import React, { useEffect, useState, Component } from 'react'
import CVHeader from './CVHeader'
import Profile from './profile'
import LanguagesAndToolsList from './languagesAndToolsList'
import SkillsList from './skillsList'
import EducationList from './educationList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'

import { Col, Row} from 'react-bootstrap'
import ProfessionalList from './professionalList'
import EducationListHard from './educationListHard'
import LanguagesAndToolsListHard from './languagesAndToolsHard'
import SkillsListHard from './skillsListHard'

class CV extends Component {

    render(){
        const {devExp, istomExp, courses, infos, skills, tools} = this.props;
        return(
            <div className="px-5 py-3 CVBody">
                <Row>
                    <Col>
                        <CVHeader infos={infos}/>
                        <Profile />
                        {/* <LanguagesAndToolsList tools={tools}/> */}
                        <LanguagesAndToolsListHard />
                        {/* <SkillsList skills={skills}/> */}
                        <SkillsListHard />
                    </Col>
                </Row>
                <hr className="double-razor"/>
                <Row>
                    <Col
                        lg={{
                            span:6
                        }}
                        xl={{
                            span:5,
                            offset:1,
                        }}
                        className="order-2 order-lg-1"
                    >
                        <div className="d-lg-none">
                            <hr className="my-1"/>
                        </div>
                        <ProfessionalList devExp={devExp} istomExp={istomExp}/>
                    </Col>
                    <Col
                        lg={{
                            span:6
                        }}
                        xl={{
                            span:5
                        }}
                        className="order-1 order-lg-2"
                    >
                        {/* <EducationList courses={courses}/> */}
                        <EducationListHard />
                    </Col>
                </Row>
            </div>
        )
    }
}
    

export default CV