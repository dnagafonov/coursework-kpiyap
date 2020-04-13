import React from 'react';
import './info-container.scss'
import { ScrollToTop } from '../ScrollToTop';

const InfoContainer = props => {
    return (
        <div className="info-container">
            <div className="wrapper info-container__wrapper">
                <ScrollToTop/>
                {props.children}
            </div>
        </div>
    )
}

export default InfoContainer;