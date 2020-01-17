import React, { Component } from 'react'
import './Experiences.scss'
import ScrollToNext from './ScrollToNext'
import ScrollToPrevious from './ScrollToPrevious'

class Experiences extends Component {
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <section id="experiences">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <p>My Experiences</p>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default Experiences