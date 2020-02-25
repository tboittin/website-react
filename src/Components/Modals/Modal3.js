import React, {useState} from 'react'
import {Button, Modal, Card, Image} from 'react-bootstrap'
import cabin from '../../img/cabin.png'


function Modal3() {
    const [Modal3Show, setModal3Show] = useState(false);
  
    return (
      <>
        <div className="p-4 h-25 w-25 d-inline-flex flex-wrap mx-2">
            <Card
                onClick={() => setModal3Show(true)}
            >
                <Card.Img
                    variant="top"
                    className="project"
                    src={cabin}
                    alt="" 
                    
                />
            </Card>
        </div>
        
        <Modal
          size="lg"
          show={Modal3Show}
          onHide={() => setModal3Show(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Ravenous
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src={cabin} fluid />
                <p>Ravenous description.</p>
                <Button>Have a look!</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Modal3