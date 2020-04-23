import React, { useEffect, useState } from 'react';
import './good.scss';
import { getCurrentPrice } from '../../tools/get-current-price';

function Good ({ _id, name, price, description, currency, amount, url_name, type }) {
    const [loading, setLoading] = useState(true);
    const [priceData, setPriceData] = useState({});
    const notReady = <div></div>;
    const ready = (
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
                        <form className="good__operation">
                            <div className="good__price">{price} {}</div>
                            <button className="btn-general">Add to cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
    return (
        <>
        {loading ? notReady : ready}
        </>
    );
}

export default Good;