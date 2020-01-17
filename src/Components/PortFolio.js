import React, { Component } from 'react'
import './Portfolio.scss'
import ScrollToNext from './ScrollToNext'
import ScrollToPrevious from './ScrollToPrevious'

class Portfolio extends Component {
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <section id="portfolio">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <p>This is a Portfolio</p>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default Portfolio