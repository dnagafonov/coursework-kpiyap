import React from 'react';
import './about-us.scss'
import { ScrollToTop } from '../ScrollToTop';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="wrapper about-us__wrapper">
                <ScrollToTop/>
                <h1 className="about-us__header">
                    We are hight quality autoservice team
                </h1>
                <div className="about-us__road">
                    <div className="road">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;