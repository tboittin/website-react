import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import PersonnalInfo from './personnalInfo'
import './CVHeader.css'

const CVHeader = () => {
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
                        <PersonnalInfo />
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CVHeader