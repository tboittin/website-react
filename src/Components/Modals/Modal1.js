import React, {useState} from 'react'
import {Button, Modal, Card, Image} from 'react-bootstrap'
import circus from '../../img/circus.png'

function Modal1() {
    const [Modal1Show, setModal1Show] = useState(false);
  
    return (
      <>
        <div className="p-4 h-25 w-25 d-inline-flex flex-wrap m-2">
            <Card
                onClick={() => setModal1Show(true)}
            >
                <Card.Img
                    variant="top"
                    className="project"
                    src={circus}
                    alt="" 
                    
                />
            </Card>
        </div>
        
        <Modal
          size="md"
          show={Modal1Show}
          onHide={() => setModal1Show(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Movie DB
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src={circus} fluid />
                <p>Movie DB description</p>
                <Button>Have a look!</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Modal1