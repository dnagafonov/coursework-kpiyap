import React from 'react';
import './not-found.scss'
import { InfoContainer } from '../InfoContainer';

const NotFound = () => {
    return (
        <div className="not-found">
            <InfoContainer>
                <h1 className="not-found">
                    Ooops, that page not found...
                </h1>
            </InfoContainer>
        </div>
    )
}

export default NotFound;