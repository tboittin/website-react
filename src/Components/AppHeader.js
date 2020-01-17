import React from 'react'
import './AppHeader.scss'
import { Jumbotron, Button } from 'react-bootstrap'

function AppHeader() {
    return(
        <header className="AppHeader" id="AppHeader">
            <Jumbotron id="JumbotronHeader">
                <div id="JumbotronText">
                    <h1>Hi I'm Thomas</h1>
                    <p>I'm a Web Developper</p>
                    <Button>
                        About Me
                    </Button>
                </div>
            </Jumbotron>
        </header>
    )
}

export default AppHeader;