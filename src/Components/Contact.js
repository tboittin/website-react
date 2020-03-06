import React, { Component } from 'react'
import './Contact.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import AppFooter from './AppFooter';
import { Col, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

class Contact extends Component {
    render() {
        const {sectionOrder, positionOrder, infos} = this.props;
        return(
            <>
            <section id="contact">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="contactContent">
                    <Row>
                        <Col
                            xs={6}
                            className="text-center align-content-center"
                        >
                            <h3 className="p-5">LOCATION</h3>
                            <h4>France</h4>
                            
                        </Col>
                        <Col
                            xs={6}
                            className="text-center"
                        >
                            <h3 className="p-5">CONTACT</h3>
                            <div className="contactIcon">
                                <a href={infos.linkedIn} target="_blank">
                                    <FaLinkedinIn 
                                        size={35}
                                        className="mx-3"
                                    />
                                </a>
                                <a href={infos.mailto}>
                                    <FaEnvelope 
                                        size={35}
                                        className="mx-3"
                                    />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    
                    
                </div>
                
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                
            </section>
            <AppFooter />
            </>
        )
    }
}

export default Contact