import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './languagesAndToolsList.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

class LanguagesAndToolsList extends Component {
    
    rendertools (tools) {
        <React.Fragment>
            {/* <h3>Languages and Tools</h3> */}
            <Container className="mb-3 mt-3">
                <ul className="p-1 text-center d-flex flex-wrap justify-content-around">
                    {toolsList.map(tool => (
                        <li key={tool.id} className="m-1 badge-pill badge-primary">
                            <span className="d-none">{tool.icon}</span> {tool.name}
                        </li>
                    ))}
                </ul>
            </Container>
        </React.Fragment>
    }

    render () {
        return (
            this.rendertools(tools)
        )
    }
}

export default LanguagesAndToolsList