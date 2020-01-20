import React from 'react'
import './AppNavbar.scss'
import logo from './logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Col lg={1} className="justify-content-start">
                <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /> Logo</Navbar.Brand>
            </Col>
            <Col lg={{span: 3, offset:5}}>
                <Nav className="mr-auto">
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#Skills">Skills</Nav.Link>
                    <Nav.Link href="#Experiences">Experiences</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Col>
            <Col lg={2} className="justify-content-end">
                <Button variant="light">
                    <span className="d-none d-lg-inline">Go to </span>LightMode
                </Button>
            </Col>
            <Col lg={1} className="justify-content-end">
                <Button variant="dark">
                    EN
                </Button>
            </Col>
        </Navbar>
    )
}

export default AppNavbar;