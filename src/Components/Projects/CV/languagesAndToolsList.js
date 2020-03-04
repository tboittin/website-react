import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './languagesAndToolsList.css'
import { Container } from 'react-bootstrap'

class LanguagesAndToolsList extends Component {
    
    rendertools (tools) {
        return(
            <>
                
                {tools.map(tool => (
                    <li key={tool.id} className="m-1 badge-pill badge-primary">
                        <span className="d-none">{tool.icon}</span> {tool.name}
                    </li>
                ))}
            </>
        )
        
    }

    render () {
        const tools = this.props
        return (
            <div className="mb-3 mt-3">
                <ul className="p-1 text-center d-flex flex-wrap justify-content-around">
                    {
                        (tools.length>0)&&
                        (this.rendertools(tools))
                    }
                </ul>
            </div>
        )
    }
}

export default LanguagesAndToolsList