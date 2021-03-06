import React, { Component } from 'react'
// import PersonnalInfo from './personnalInfo'
import './CVHeader.scss'
import PersonnalInfoHard from './personnalInfoHard'

class CVHeader extends Component {

    render () {
        // const infos = this.props
        return (
            <div className="hero">
                <>
                    <div className="text-center">
                        <h1>Thomas Boittin</h1>
                    </div>
                    <div className="text-center text-lg-right">
                        {/* <PersonnalInfo infos={infos}/> */}
                        <PersonnalInfoHard />
                    </div>
                </>
            </div>
        )
    }
}

export default CVHeader