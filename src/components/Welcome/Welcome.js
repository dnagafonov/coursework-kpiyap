import React from 'react';
import './welcome.scss'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="wrapper welcome__wrapper">
                <div className="welcome__header">
                    <h1>Welcome</h1>
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
                    <Link to="/about-us"><h4>About us</h4></Link>
                    <Link to="/spares"><h4>spares</h4></Link>
                    <Link to="/services"><h4>Services</h4></Link>
                </div>
            </div>s  
        </div>
    )
}

export default Welcome;