import React, { Component } from 'react'
import './Contact.scss'
import ScrollToNext from './Navigation/ScrollToNext'
import ScrollToPrevious from './Navigation/ScrollToPrevious'
import AppFooter from './AppFooter';

class Contact extends Component {
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <>
            <section id="contact">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="contactContent">
                    
                    
                </div>
                
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                
            </section>
            <AppFooter />
            </>
        )
    }
}

export default Contact