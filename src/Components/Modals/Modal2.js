import React, {useState} from 'react'
import {Button, Modal, Card, Image} from 'react-bootstrap'
import cake from '../../img/cake.png'

function Modal2() {
    const [Modal2Show, setModal2Show] = useState(false);
  
    return (
      <>
        <div className="p-4 h-25 w-25 d-inline-flex flex-wrap mx-2">
            <Card
                onClick={() => setModal2Show(true)}
            >
                <Card.Img
                    variant="top"
                    className="project"
                    src={cake}
                    alt="" 
                    
                />
            </Card>
        </div>
        
        <Modal
          size="lg"
          show={Modal2Show}
          onHide={() => setModal2Show(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Jamming
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src={cake} fluid />
                <p>Jamming description</p>
                <Button>Have a look!</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Modal2