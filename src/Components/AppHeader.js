import React, { Component } from 'react'
import './AppHeader.scss'
import {Jumbotron, Image, Col} from 'react-bootstrap'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import ModalCV from './Modals/ModalCV'
// import headerPic from '../img/headerPic.jpeg'

class AppHeader extends Component {
    render() {
        const {sectionOrder, positionOrder, devExp, istomExp, courses, infos, skills, tools} = this.props;
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
                            <ModalCV
                                devExp={devExp}
                                istomExp={istomExp}
                                courses={courses}
                                infos={infos}
                                skills={skills}
                                tools={tools}
                            />
                        </div>
                        
                    </Jumbotron>
                    <ScrollToNext
                        sectionOrder={sectionOrder}
                        positionOrder={positionOrder}
                    />
                </section>
            </header>
        )
    }
}

export default AppHeader;