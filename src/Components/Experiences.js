import React, { Component } from 'react'
import './Experiences.scss'
import PropTypes from 'prop-types'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import VerticalTimeline from './Utilities/VerticalTimeline'
import ExperienceVerticalTimeline from './Utilities/VerticalTimeline'

class Experiences extends Component {
    render() {
        const {sectionOrder, positionOrder, devExp, istomExp} = this.props;
        return(
            <section id="experiences">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="experiencesContent">
                    <p>My Experiences</p>
                    <div>
                        {/* <ExperienceVerticalTimeline
                         /> */}
                    </div>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

Experiences.propTypes = {
    devExp: PropTypes.array,
    istomExp: PropTypes.array,
}

export default Experiences