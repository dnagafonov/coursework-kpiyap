import React, { useEffect } from 'react';
import { ScrollToTop } from '../ScrollToTop';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addGoodToCart, setGoodData, clearGood } from '../../actions/actions';
import { getExchangeRate } from '../../tools/get-exchange-rate';
import PropTypes from 'prop-types'

import './good.scss';

function Good({ good, addGoodToCart, setGoodData, userId, currency, clearGood }) {
    const { type, id } = useParams();
    console.log("Export");
    useEffect(() => {
        getExchangeRate().then(rate => setGoodData(type, id, rate, currency));
        return () => clearGood();
        // eslint-disable-next-line
    }, [userId, currency]);
    const handleClick = event => {
        event.preventDefault();
        addGoodToCart(userId, good);
    }
    const btn = <div className="text-container">To add you need to log in</div>;
    const btnLog = <button className="btn-general" onClick={handleClick}>Add to cart</button>;
    const notReady = (
        <div className="good">
            <ScrollToTop />
            <div className="good__wrapper wrapper">
                <div className="good__image">
                    <div className="good__image__wrapper shadow loading-row"></div>
                </div>
                <div className="good__info">
                    <h3 className="good__name loading-row"> </h3>
                    <div className="good__discription loading-row"></div>
                    <div className="good__operation loading-row"></div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            {good ? (
                <div className="good">
                    <ScrollToTop />
                    <div className="good__wrapper wrapper">
                        <div className="good__image">
                            <div className="good__image__wrapper shadow"></div>
                        </div>
                        <div className="good__info">
                            <div className="info__wrapper">
                                <h3 className="good__name">{good.name}</h3>
                                <div className="good__discription">{good.description}</div>
                                <form className="good__operation">
                                    <div className="good__price">{good.currentPrice.price + " " + good.currentPrice.symbol}</div>
                                    {userId ? btnLog : btn}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : notReady}
        </>
    );
}

Good.propTypes = {
    good: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        currentPrice: PropTypes.exact({
            price: PropTypes.number.isRequired,
            symbol: PropTypes.string.isRequired
        })
    }),
    userId: PropTypes.string,
    currency: PropTypes.string.isRequired,
    setGoodData: PropTypes.func.isRequired,
    addGoodToCart: PropTypes.func.isRequired,
    clearGood: PropTypes.func.isRequired
};

const mapState = state => ({
    good: state.goodReducer.good,
    userId: state.account._id,
    currency: state.account.currency
});

const mapDispatch = dispatch => ({
    setGoodData(type, id, rate, currency) {
        dispatch(setGoodData(type, id, rate, currency))
    },
    addGoodToCart(id, good) {
        dispatch(addGoodToCart(id, good))
    },
    clearGood() {
        dispatch(clearGood())
    }
});

export default connect(mapState, mapDispatch)(Good);