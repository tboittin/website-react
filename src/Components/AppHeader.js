import React, { Component } from 'react'
import './AppHeader.scss'
import { Jumbotron, Button } from 'react-bootstrap'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'

class AppHeader extends Component {
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <header className="AppHeader" id="AppHeader">
                <section id="header">
                    <ScrollToPrevious
                        sectionOrder={sectionOrder}
                        positionOrder={positionOrder}
                    />
                    <Jumbotron id="JumbotronHeader">
                        <div id="JumbotronText">
                            <h1>Hi I'm Thomas</h1>
                            <p>I'm a Web Developper</p>
                            <Button>
                                My Resume
                            </Button>
                        </div>
                        <ScrollToNext
                            sectionOrder={sectionOrder}
                            positionOrder={positionOrder}
                        />
                    </Jumbotron>
                </section>
            </header>
        )
    }
}

export default AppHeader;