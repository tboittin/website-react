import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
// import PDFViewer from 'pdf-viewer-reactjs'
import CV from '../Projects/CV/CV'

function ModalCV() {
    const [ModalCVShow, setModalCVShow] = useState(false);
  
    return (
      <>
        <Button onClick={() => setModalCVShow(true)}>
            My Resume
        </Button>
        
        <Modal
          size="xl"
          show={ModalCVShow}
          onHide={() => setModalCVShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Resume
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                {/* <PDFViewer 
                    document={{url:"../Projects/CV/Resume - Thomas Boittin-26-02-2020.pdf",}}
                /> */}
                <CV />
                <Button>Download it !</Button>
            </Modal.Body>
        </Modal>
      </>
    );
  }

  export default ModalCV