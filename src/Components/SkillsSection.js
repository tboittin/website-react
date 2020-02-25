import React, { Component } from 'react'
import './SkillsSection.scss'
import PropTypes from 'prop-types'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
// import MapSkills from './Utilities/mapSkills'
import ProgressBarSkills from './Utilities/progressBarSkills'

class SkillsSection extends Component {

    render() {
        const {sectionOrder, positionOrder, skills, tools} = this.props;
        return(
            // <section id="skills">
            //     <ScrollToPrevious
            //         sectionOrder={sectionOrder}
            //         positionOrder={positionOrder}
            //     />
            //     <div className="skillsContent">
            //         <MapSkills skills={tools} />
            //         <MapSkills skills={skills} />
            //     </div>
            //     <ScrollToNext
            //         sectionOrder={sectionOrder}
            //         positionOrder={positionOrder}
            //     />
            // </section>

            //Site provisoire
            <section id="skills">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="text-center m-4">
                    <h2>Skills</h2>
                </div>
                <div className="skillsContent d-flex flex-wrap pb-0">
                    <ProgressBarSkills skills={tools} variant={"info"}/>
                    <ProgressBarSkills skills={skills} variant={"danger"}/>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>

        )
    }
}

SkillsSection.propTypes = {
    tools: PropTypes.array,
    skills: PropTypes.array,
}

export default SkillsSection