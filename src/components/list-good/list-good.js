import React from 'react';
import './list-good.scss'

const ListGood = props => {
    const { name, price } = props;
    return (
        <div className="list-good shadow">
            <div className="list-good__image">
                <div className="list-good__name text-container">{name}</div>
            </div>
            <div className="list-good__description">
                <div className="list-good__price">{price}</div>
                <button className="btn-general">Add to cart!</button>
            </div>
        </div>
    );
}

export default ListGood;