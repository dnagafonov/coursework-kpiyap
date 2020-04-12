import React from 'react';
import './not-found.scss'
import { ScrollToTop } from '../ScrollToTop';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="wrapper not-found__wrapper">
                <ScrollToTop/>
                <h1 className="not-found__header">
                    Ooops, that page not found...
                </h1>
            </div>
        </div>
    )
}

export default NotFound;