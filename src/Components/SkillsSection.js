import React, { Component } from 'react'
import './SkillsSection.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'

class SkillsSection extends Component {
    
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <section id="skills">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="skillsContent">
                    <p>My skills</p>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default SkillsSection