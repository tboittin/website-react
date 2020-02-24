import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'


class XlModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
    renderXlModal(project, show) {
        return (
            <Modal
                size="xl"
                show={show}
                onHide={() => {show = false}}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-xl">
                    {project.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>{project.content}</Modal.Body>
            </Modal>
        )
    }

    render() {
        const {project, show} = this.props
        console.log('hello')
        console.log(show)
        return(
            this.renderXlModal(project, show)
        )
    }
}

export default XlModal