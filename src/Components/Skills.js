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

export default Skills