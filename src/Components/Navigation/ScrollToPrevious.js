import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import './ScrollToPrevious.scss'
import {IoIosArrowUp} from 'react-icons/io'

class ScrollToPrevious extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }
    }

    componentDidMount() {
        this.toggleVisibility();
    }

    toggleVisibility() {
        const {positionOrder} = this.props;
        (positionOrder === 0) ? 
            this.setState({ visible: false }) :
            this.setState({ visible: true })
    }

    handleScrollToPrevious() {
        const {sectionOrder, positionOrder} = this.props;
        let previous = "";
        if (positionOrder === 0) {
            this.scrollToTop()
        } else {
            previous = document.getElementById(sectionOrder[positionOrder-1].name)
            this.scrollToPrevious(previous)
        }
    }
    
    scrollToPrevious = (previous) => {
        window.scrollTo({
            top: previous.offsetTop,
            behavior: 'smooth'
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render () {
        const {visible} = this.state;
        return(
            <div className="scrollToPrevious">
                {visible && (
                    <Row className="d-flex justify-content-center align-self-start">
                        <div style={{color:'#343a40'}}>
                            <IoIosArrowUp
                                onClick={() => this.handleScrollToPrevious()}
                                size={40}
                            >
                                Previous
                            </ IoIosArrowUp>
                        </div>
                    </Row>
                )}
            </div>
        )
    }
}

export default ScrollToPrevious