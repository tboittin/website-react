import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class LgModal extends Component {
    renderLgModal() {
        const [lgShow, setLgShow] = useState(false);
        const {project} = this.props
        return (
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {project.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>{project.description}</Modal.Body>
            </Modal>
        )
    }
}

export default LgModal