import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import PersonnalInfo from './personnalInfo'
import './CVHeader.scss'

class CVHeader extends Component {

    render () {
        const infos = this.props
        return (
            <div className="hero">
                <Container>
                    <Row>
                        <Col 
                            xs={{
                                span: 12,
                            }}
                            className="text-center align-content-end"
                        >
                            <h1 className="title">Thomas Boittin</h1>
                        </Col>
                        <Col
                            xs={{
                                span: 12,
                            }}
    
                            className="text-center text-lg-right"
                        >
                            <PersonnalInfo infos={infos}/>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CVHeader