import React from 'react';
import './good.scss';
import { ScrollToTop } from '../ScrollToTop';

function Good ({ _id, name, price, description, currency, amount, url_name, type, colors }) {
    const notReady = (
        <div className="good">
            <ScrollToTop />
            <div className="good__wrapper wrapper">
                <div className="good__image">
                    <div className="good__image__wrapper shadow loading-row"></div>
                </div>
                <div className="good__info">
                    <div className="info__wrapper">
                        <h3 className="good__name loading-row"> </h3>
                        <div className="good__discription loading-row"></div>
                        <div className="good__operation loading-row"></div>
                    </div>
                </div>
            </div>
        </div >
    );
    return (
        <>
        {false ? (
        <div className="good">
            <ScrollToTop />
            <div className="good__wrapper wrapper">
                <div className="good__image">
                    <div className="good__image__wrapper shadow">
                        <img src="#" alt="#" />
                    </div>
                </div>
                <div className="good__info">
                    <div className="info__wrapper">
                        <h3 className="good__name">{name}</h3>
                        <div className="good__discription">{description}</div>
                        <form className="good__operation">
                            <div className="good__price">{price}</div>
                            <button className="btn-general">Add to cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    ) : notReady}
        </>
    );
}

export default Good;