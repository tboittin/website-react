import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import './ScrollToNext.scss'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

class ScrollToNext extends Component {
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
        const {positionOrder, sectionOrder} = this.props;
        (positionOrder === sectionOrder.length -1) ? 
            this.setState({ visible: false }) :
            this.setState({ visible: true });   
    }

    handleScrollToNext() {
        const {sectionOrder, positionOrder} = this.props;
        const next = document.getElementById(sectionOrder[positionOrder+1].name);
        this.scrollToNext(next);
    }
    
    scrollToNext = (next) => {
        window.scrollTo({
            top: next.offsetTop,
            behavior: 'smooth'
        });
    }

    render () {
        const {visible} = this.state;
        return(
            <div className="scrollToNext d-block">
                {visible && (
                    <Row className="d-flex justify-content-center align-self-end">
                        <div style={{color:'#007bff'}}>
                            <IoIosArrowDropdownCircle
                                onClick={() => this.handleScrollToNext()}
                                size={40}
                            >
                                Next
                            </ IoIosArrowDropdownCircle>
                        </div>
                    </Row>
                )}
            </div>
        )
    }
}

export default ScrollToNext