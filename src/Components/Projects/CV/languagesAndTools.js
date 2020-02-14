import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './languagesAndTools.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const LanguagesAndTools = () => {
    const toolsList = [
        {
            id: '1',
            icon: <FontAwesomeIcon icon={faReact}/>,
            name: 'React.js',
        },
        {
            id: '2',
            icon: '',
            name: 'Next.js',
        },
        {
            id: '3',
            name: 'React-BootStrap',
        },
        {
            id: '4',
            name: 'Git',
        },
        {
            id: '5',
            name: 'WordPress',
        },
        {
            id: '6',
            name: 'HTML & CSS',
        },
    ]

    return (
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
    )
}

export default LanguagesAndTools