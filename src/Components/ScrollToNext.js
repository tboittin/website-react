import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

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
            this.setState({ visible: true })
    }

    handleScrollToNext() {
        const {sectionOrder, positionOrder} = this.props;
        const next = document.getElementById(sectionOrder[positionOrder+1].name);
        console.log(next);
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
            <div className="scrollToNext">
                {visible && (
                    <Button
                        onClick={() => this.handleScrollToNext()}
                    >
                        Next
                    </ Button>
                )}
            </div>
        )
    }
}

export default ScrollToNext