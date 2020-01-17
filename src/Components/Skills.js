import React, { Component } from 'react'
import './Skills.scss'
import ScrollToNext from './ScrollToNext'
import ScrollToPrevious from './ScrollToPrevious'

class Skills extends Component {
    
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <section id="skills">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <p>My skills</p>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default Skills