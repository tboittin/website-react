import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './languagesAndToolsList.css'
import { Container } from 'react-bootstrap'

class LanguagesAndToolsListHard extends Component {

    render () {
        return (
            <div className="mb-3 mt-3">
                <ul className="p-1 text-center d-flex flex-wrap justify-content-around">
                    <li className="m-1 badge-pill badge-primary">
                        React.js
                    </li>
                    <li className="m-1 badge-pill badge-primary">
                        Next.js
                    </li>
                    <li className="m-1 badge-pill badge-primary">
                        React-Bootstrap
                    </li>
                    <li className="m-1 badge-pill badge-primary">
                        Git
                    </li>
                    <li className="m-1 badge-pill badge-primary">
                        Wordpress
                    </li>
                    <li className="m-1 badge-pill badge-primary">
                        HTML & CSS
                    </li>

                </ul>
            </div>
        )
    }
}

export default LanguagesAndToolsListHard