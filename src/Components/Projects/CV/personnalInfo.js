import React, { Component } from 'react'
import './personnalInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faLaptopCode} from '@fortawesome/free-solid-svg-icons'

class PersonnalInfo extends Component {
    renderInfos (infos) {
        <React.Fragment>
            <ul className="text-center pl-0 m-3">
                <li className="mb-4" >
                    {infos.profession}
                     {/* - {infos.age} years old */}
                 </li>
            </ul>
            <ul className="pl-0 d-flex text-center justify-content-around mt-3 mb-3">
                <li className="d-inline"><a href={infos.website}  target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={faLaptopCode}
                        size="2x"
                    />
                    <span className="d-none d-md-block">Website Here</span>
                </a></li>
                <li className="d-inline"><a href={infos.mailto}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                    />
                    <span className="d-none d-md-block">{infos.mail}</span>
                </a></li>
                <li className="d-inline"><a href={infos.phoneCall}>
                    <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                    />
                    <span className="d-none  d-md-block">{infos.phone}</span>
                </a></li>
            </ul>
        </React.Fragment>
    }
    
    render () {
        return (
            this.renderInfos()
        )
    }
    
}

export default PersonnalInfo