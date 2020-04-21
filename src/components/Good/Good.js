import React from 'react';
import './good.scss';

const Good = ({ _id, name, price, description, currency, amount, url_name, type }) => {

    return (
        <div className="good">
            <div className="wrapper good__wrapper">
                <div className="good__image">
                    <div className="image__wrapper shadow">
                        <img src="#" alt="#" />
                    </div>
                </div>
                <div className="good__info">
                    <div className="info__wrapper">
                        <h3 className="good__name">{name}</h3>
                        <div className="good__discription">{description}</div>
                        <div className="good__price">{price} {currency}</div>
                        <div className="good__operation">
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Good;