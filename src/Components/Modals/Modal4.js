import React, {useState} from 'react'
import {Button, Modal, Card, Image} from 'react-bootstrap'
import fitactiveThumb from '../../img/FitActive-thumb.png'
import fitactive from '../../img/FitActive.png'

function Modal4() {
    const [Modal4Show, setModal4Show] = useState(false);
  
    return (
      <>
        <div className="p-4 h-25 w-25 d-inline-flex flex-wrap m-2">
            <Card
                onClick={() => setModal4Show(true)}
            >
                <Card.Img
                    variant="top"
                    className="project"
                    src={fitactiveThumb}
                    alt="" 
                    
                />
            </Card>
        </div>
        
        <Modal
          size="md"
          show={Modal4Show}
          onHide={() => setModal4Show(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    FitActive
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src={fitactive} fluid />
                <p>It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.</p>
                <Button>Have a look!</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Modal4