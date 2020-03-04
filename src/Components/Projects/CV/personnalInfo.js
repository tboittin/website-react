import React, { Component } from 'react'
import './personnalInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaLaptopCode, FaEnvelope, FaPhone} from 'react-icons/fa'

class PersonnalInfo extends Component {
    renderInfos (infos) {
        return (
            <>
                <ul className="text-center pl-0 m-3">
                    <li className="mb-4" >
                        {infos.profession}
                        {/* - {infos.age} years old */}
                    </li>
                </ul>
                <ul className="pl-0 d-flex text-center justify-content-around mt-3 mb-3">
                    <li className="d-inline"><a href={infos.website}  target="_blank" rel="noopener noreferrer">
                        <FaLaptopCode />
                        <span className="d-none d-md-block">Website Here</span>
                    </a></li>
                    <li className="d-inline"><a href={infos.mailto}>
                        <FaEnvelope />
                        <span className="d-none d-md-block">{infos.mail}</span>
                    </a></li>
                    <li className="d-inline"><a href={infos.phoneCall}>
                        <FaPhone />
                        <span className="d-none  d-md-block">{infos.phone}</span>
                    </a></li>
                </ul>
            </>
        )
        
    }
    
    render () {
        const infos = this.props
        return (
            <>
                {
                    // (infos.length>0)&&
                    (this.renderInfos(infos))
                }
            </>
        )
    }
    
}

export default PersonnalInfo