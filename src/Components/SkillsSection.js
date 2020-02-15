import React, { Component } from 'react'
import './SkillsSection.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import MapSkills from './mapSkills'

class SkillsSection extends Component {

    render() {
        const {sectionOrder, positionOrder, skills, tools} = this.props;
        return(
            <section id="skills">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="skillsContent">
                    <MapSkills skills={tools} />
                    <MapSkills skills={skills} />
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