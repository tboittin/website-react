import React from 'react'
import './AppNavbar.scss'
import logo from './logo.svg'
import {Navbar, Nav, Col} from 'react-bootstrap'
import SmoothScrollTo from './Navigation/SmoothScrollTo'


function AppNavbar() {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="appNavbar"
        >
            <Col lg={1} className="justify-content-start">
                <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /> Logo</Navbar.Brand>
            </Col>
            <Col lg={{span: 3, offset:6}}>
                <Nav className="mr-auto smooth-scroll">
                    <Nav.Link onClick={() => SmoothScrollTo('AppHeader')}>
                        About
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo('portfolio')}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo('skills')}>
                        Skills
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo('experiences')}>
                        Experiences
                    </Nav.Link>
                    <Nav.Link onClick={() => SmoothScrollTo('contact')}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Col>
            {/* <Col lg={2} className="justify-content-end">
                <Button variant="light">
                    <span className="d-none d-xl-inline">Go to </span>LightMode
                </Button>
            </Col> */}
            {/* <Col lg={1} className="justify-content-end">
                <Button variant="dark">
                    EN
                </Button>
            </Col> */}
        </Navbar>
    )
}

export default AppNavbar;