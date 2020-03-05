import React, { Component } from 'react'
import './personnalInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaLaptopCode, FaEnvelope, FaPhone} from 'react-icons/fa'

class PersonnalInfoHard extends Component {
    
    render () {
        // const infos = this.props
        return (
            <>
                <ul className="text-center pl-0 m-3">
                    <li className="mb-4" >
                        Enthusiastic Web Developer
                    </li>
                </ul>
                <ul className="pl-0 d-flex text-center justify-content-around mt-3 mb-3">
                    <li className="d-inline"><a href='https://tboittin.github.io/'  target="_blank" rel="noopener noreferrer">
                        <FaLaptopCode />
                        <span className="d-none d-md-block">Website Here</span>
                    </a></li>
                    <li className="d-inline"><a href='mailto:tboittin@gmail.com'>
                        <FaEnvelope />
                        <span className="d-none d-md-block">tboittin@gmail.com</span>
                    </a></li>
                    <li className="d-inline"><a href='tel:+33623397978'>
                        <FaPhone />
                        <span className="d-none  d-md-block">+33623397978</span>
                    </a></li>
                </ul>
            </>
        )
    }
    
}

export default PersonnalInfoHard