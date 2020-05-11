import React from 'react';
import './info-container.scss'
import { ScrollToTop } from '../ScrollToTop';

const InfoContainer = props => {
    return (
        <div className="info-container">
            <ScrollToTop />
            <div className="info-container__wrapper wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default InfoContainer;