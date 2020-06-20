import React from 'react';
import { ScrollToTop } from '../ScrollToTop';
import PropTypes from 'prop-types'

import './info-container.scss'

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

InfoContainer.propTypes = {
    props: PropTypes.shape({
        children: PropTypes.node
    })
};

export default InfoContainer;