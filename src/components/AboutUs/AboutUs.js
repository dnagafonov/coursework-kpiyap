import React from 'react';
import './about-us.scss'
import { InfoContainer } from '../InfoContainer';

const AboutUs = () => {
    return (
        <div className="about-us">
            <InfoContainer>
                <h1 className="about-us__header">
                    We are hight quality autoservice team
                </h1>
            </InfoContainer>
        </div>
    )
}

export default AboutUs;