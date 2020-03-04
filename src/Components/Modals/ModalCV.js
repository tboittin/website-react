import React, {useState, Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
// import PDFViewer from 'pdf-viewer-reactjs'
import CV from '../Projects/CV/CV'

class ModalCV extends Component {
  constructor(props){
    super(props)
    this.state = {
      ModalCVShow : false,
    }
  }
  
  setModalCVShow(value) {
    this.setState({ModalCVShow: value})
  }

  render() {
    const {ModalCVShow} = this.state
    const {devExp, istomExp, courses, infos, skills, tools} = this.props;
    return (
      <>
        <Button onClick={() => this.setModalCVShow(true)}>
          My Resume
        </Button>
        
        
        <Modal
          size="xl"
          show={ModalCVShow}
          onHide={() => this.setModalCVShow(false)}
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
              <CV 
                devExp={devExp}
                istomExp={istomExp}
                courses={courses}
                infos={infos}
                skills={skills}
                tools={tools}
              />
              <a href="..\Projects\CV\Resume - Thomas Boittin-26-02-2020.pdf" download>
                <Button>Download it !</Button>
              </a>
            </Modal.Body>
        </Modal>
      </>
    );
  }
}

  export default ModalCV