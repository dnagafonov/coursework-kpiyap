import React from 'react';
import './list-good.scss'

const ListGood = props => {
    const { name, price } = props;
    return (
        <div className="list-good shadow">
            <div className="list-good__image">
                <img src="" alt="" />
            </div>
            <div className="list-good__description">
                <div className="list-good__name">{name}</div>
                <div className="list-good__price">{price}</div>
            </div>
        </div>
    );
}

export default ListGood;