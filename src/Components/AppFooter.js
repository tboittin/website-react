import React from 'react'
import './AppFooter.scss'
import {Navbar} from 'react-bootstrap'

function AppFooter() {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            sticky="bottom"
            className="text-white justify-content-center"
        >
            <div className="copyright">
                Copyright © Thomas Boittin 2019
            </div>
        </Navbar>
    )
}

export default AppFooter;