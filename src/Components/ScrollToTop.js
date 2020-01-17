import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './ScrollToTop.scss'

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        const scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        })
    }

    toggleVisibility() {
        (window.pageYOffset > 50) ? 
            this.setState({ visible: true }) :
            this.setState({ visible: false })
    }

    ScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        const {visible} = this.state;
        return (
            <div className="scrollToTop">
                {visible && (
                    <Button onClick={() => this.ScrollToTop()}>
                        Go to top
                    </Button>
                )}
            </div>
        )
    }
}

export default ScrollToTop;