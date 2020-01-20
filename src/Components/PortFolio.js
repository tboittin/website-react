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
                <div className="portfolioContent">
                    <p>This is a Portfolio</p>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default Portfolio