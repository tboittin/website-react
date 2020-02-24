import React, {Component} from 'react'
import './Portfolio.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import { Container, Row, Col } from 'react-bootstrap'

class PortfolioPortage extends Component {

    
    renderPortageItem1 () {
        return(
            <>
                <Col
                    md={6}
                    lg={4}
                >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="img\portfolio\colmaracademy-responsivewebpic-thumb.png" alt="" />
                    </div>
                </Col>
            </>
        )
    }

    renderPortageItem2 () {
        return(
            <>
                <Col
                    md={6}
                    lg={4}
                >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/FitActive-thumb.png" alt="" />
                    </div>
                </Col>
            </>
        )
    }

    renderPortageItem3 () {
        return(
            <>
                <Col
                    md={6}
                    lg={4}
                >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/excursion-thumb.png" alt="" />
                    </div>
                </Col>
            </>
        )
    }

    renderPortageItem4 () {
        return(
            <>
                <Col
                    md={6}
                    lg={4}
                >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </>
        )
    }

    renderPortageItem5 () {
        return(
            <>
                <Col
                    md={6}
                    lg={4}
                >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/RistoranteConFusion-thumb.png" alt="" />
                    </div>
                </Col>
            </>
        )
    }

    renderPortageItem6 () {
        return(
            <>
                <Col
                    md={6}
                    lg={4}
                >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fa fa-code fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/submarine.png" alt="" />
                    </div>
                </Col>
            </>
        )
    }

    renderPortage () {
        return (
            <>
                <section id="portfolio">
                    <Container>

                    <h2>Portfolio</h2>

                    <Row>
                        {this.renderPortageItem1()}
                        {this.renderPortageItem2()}
                        {this.renderPortageItem3()}
                        {this.renderPortageItem4()}
                        {this.renderPortageItem5()}
                        {this.renderPortageItem6()}
                    </Row>

                    </Container>
                </section>
            </>
        )
    }

    render () {
        const {sectionOrder, positionOrder, projects} = this.props;
        return(
            <section id="portfolio">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="portfolioContent">
                    <Col
                        xs={{
                            span:10,
                            offset:1,
                        }}
                        className=" text-center"
                    >
                        {(projects.length>0)&&(this.renderPortage())}
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