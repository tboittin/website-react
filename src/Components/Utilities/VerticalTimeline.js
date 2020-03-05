import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { Component } from 'react';
import {FaLaptopCode} from 'react-icons/fa'

class ExperienceVerticalTimeline extends Component {

    render() {
        return(
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">France</h4>
                    <p>
                        Web Freelancer - React - WordPress - Static Website - SEO
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">COBOL Analyst Developer - Adaming</h3>
                    <h4 className="vertical-timeline-element-subtitle">Adaming Conseil - France</h4>
                    <p>
                        Product evolution as part of planned actions.
                        Development and unit tests.
                        Reporting.
                        Technical correction related to user Demands.
                        Go live patches.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">Agronomy Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">IIRR - Philippines</h4>
                    <p>
                        Short term impact study - family farming support project - Cavite province.
                        Monitoring tool development - better reporting & improved project management.
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        )
        
    }
    
}


export default ExperienceVerticalTimeline