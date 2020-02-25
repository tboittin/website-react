import React, { Component } from 'react'
import {Button, Row} from 'react-bootstrap'
import './ScrollToNext.scss'

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
        (positionOrder === 4) ? 
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
            <div
                className="scrollToNext d-block">
                {visible && (
                    <Row className="d-flex justify-content-center align-self-end">
                        <Button
                            onClick={() => this.handleScrollToNext()}
                        >
                            Next
                        </ Button>
                    </Row>
                )}
            </div>
        )
    }
}

export default ScrollToNext