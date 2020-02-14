import React, { Component } from 'react'
import './calque.css'

class Calque extends Component {
    constructor (props) {
        super(props)
        this.state = {
            colorFont:"",
        }
    }
    render () {
        return (
            <div className="calque">
            </div>
        )
    }
}
export default Calque