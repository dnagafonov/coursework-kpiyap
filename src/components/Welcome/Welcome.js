import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ScrollToTop } from '../ScrollToTop';

import './welcome.scss'

const Welcome = (props) => {
    console.log(props)
    return (
        <div className="welcome">
            <div className="welcome__wrapper wrapper">
                <div className="welcome__header">
                    <ScrollToTop/>
                    <h1>Welcome!</h1>
                    <ScrollLink 
                        className="arrow-down" 
                        to="down"
                        smooth={true}
                        offset={-60}
                    >
                        <i className="fas fa-angle-double-down"></i>
                    </ScrollLink>
                </div>
                <div className="welcome__layout" id="down">
                    <Link to="/about-us" className="shadow"><h4>About us</h4></Link>
                    <Link to="/spares" className="shadow"><h4>spares</h4></Link>
                    <Link to="/services" className="shadow"><h4>Services</h4></Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;