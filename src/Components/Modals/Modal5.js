import React, {useState} from 'react'
import {Button, Modal, Card, Image} from 'react-bootstrap'
import excursionThumb from '../../img/excursion-thumb.png'
import excursion from '../../img/excursion.png'

function Modal5() {
    const [Modal5Show, setModal5Show] = useState(false);
  
    return (
      <>
        <div className="p-4 h-25 w-25 d-inline-flex flex-wrap mx-2">
            <Card
                onClick={() => setModal5Show(true)}
            >
                <Card.Img
                    variant="top"
                    className="project"
                    src={excursionThumb}
                    alt="" 
                    
                />
            </Card>
        </div>
        
        <Modal
          size="lg"
          show={Modal5Show}
          onHide={() => setModal5Show(false)}
          className="text-center"

        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Excursion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={excursion} fluid />
                <p>A promotional page for a fictional app called Excursion.</p>
                <Button>Have a look!</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Modal5