import React from 'react';
import { InfoContainer } from '../InfoContainer';

import './not-found.scss'

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