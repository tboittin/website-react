import React, {useState} from 'react'
import {Button, Modal, Card, Image} from 'react-bootstrap'
import colmarThumb from '../../img/colmaracademy-responsivewebpic-thumb.png'
import colmar from '../../img/colmaracademy-responsivewebpic.jpg'

function Modal6() {
    const [Modal6Show, setModal6Show] = useState(false);
  
    return (
      <>
        <div className="p-4 h-25 w-25 d-inline-flex flex-wrap mx-2">
            <Card
                onClick={() => setModal6Show(true)}
            >
                <Card.Img
                    variant="top"
                    className="project"
                    src={colmarThumb}
                    alt="" 
                    
                />
            </Card>
        </div>
        
        <Modal
          size="lg"
          show={Modal6Show}
          onHide={() => setModal6Show(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Colmar Academy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src={colmar} className="w-75"/>
                <p>A website I made during my course on CodeCademy. It features the homepage of the non existent Colmar Academy. Made using flexbox only.</p>
                <Button>Have a look!</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Modal6