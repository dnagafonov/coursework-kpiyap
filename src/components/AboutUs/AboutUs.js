import React from 'react';
import './about-us.scss'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="wrapper about-us__wrapper">
                <div className="about-us__header">
                    <h1>About Us</h1>
                    <ScrollLink 
                        className="arrow-down" 
                        to="down"
                        smooth={true}
                        offset={-60}
                    >
                        <i className="fas fa-angle-double-down"></i>
                    </ScrollLink>
                </div>
                <div className="about-us__layout" id="down">
                    <Link to="/about-us"><h4>About us</h4></Link>
                    <Link to="/spares"><h4>spares</h4></Link>
                    <Link to="/services"><h4>Services</h4></Link>
                </div>
            </div>s  
        </div>
    )
}

export default AboutUs;