import React from 'react';
import './welcome.scss'
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="wrapper welcome__wrapper">
                <div className="welcome__header">
                    <h1>Welcome</h1>
                    <a className="arrow-down" href="#down">
                        <i className="fas fa-angle-double-down"></i>
                    </a>
                </div>
                <div className="welcome__layout" id="down">
                    <Link to="/about-us">About us</Link>
                    <Link to ="/spares">spares</Link>
                    <Link to="/services">Services</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;