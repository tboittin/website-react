import React, {Component} from 'react'
import './Portfolio.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import { Col } from 'react-bootstrap'


// import Modal1 from './Modals/Modal1'
import Modal2 from './Modals/Modal2'
import Modal3 from './Modals/Modal3'
import Modal4 from './Modals/Modal4'
import Modal5 from './Modals/Modal5'
import Modal6 from './Modals/Modal6'
import './Modals/Modal.scss'

class PortfolioPortage extends Component {

    render () {
        const {sectionOrder, positionOrder} = this.props;
        
        return(
            <section id="portfolio">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="portfolioContent">
                    <h2 className="text-center pt-3 pb-0">Portfolio</h2>
                    <Col
                        xs={{
                            span:10,
                            offset:1,
                        }}
                        className="text-center"
                    >
                        {/* <Modal1 /> */}
                        <Modal2 />
                        <Modal3 />
                        <Modal4 />
                        <Modal5 />
                        <Modal6 />
                    </Col>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }

}

export default PortfolioPortage