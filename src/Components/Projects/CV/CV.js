import './CV.scss'
import React, { useEffect, useState } from 'react'
import CVHeader from './CVHeader'
import Profile from './profile'
import LanguagesAndTools from './languagesAndTools'
import SkillsList from './skillsList'
import EducationList from './educationList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'

import { Col, Row} from 'react-bootstrap'
import ProfessionalList from './professionalList'
// import NextSVGIcon from './nextSvgIcon'
// import Divider from './divider'

import { getCourses } from '../../../Data/courses'
import { getSkills } from '../../../Data/skills'


const CV = () => {
    const [courses, setCourses] = useState([])
    const [skills, setSkills] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const resCourses = await getCourses()
            setCourses(resCourses)
            const resSkills = await getSkills()
            setSkills(resSkills)
          }
      
          fetchData()
    }, [count])

    return(
        <div className="px-5 py-3">
            <Row>
                <Col>
                    <CVHeader />
                    {/* <Divider /> */}
                    {/* <NextSVGIcon/> */}
                    <Profile />
                    <LanguagesAndTools />
                    <SkillsList skills={skills}/>
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
                    <ProfessionalList />
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
                    <EducationList courses={courses}/>
                    
                </Col>
            </Row>
        </div>
    )
}
    

export default CV