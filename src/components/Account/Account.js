import React from 'react';
import { connect } from 'react-redux';
import { ScrollToTop } from '../ScrollToTop';
import { CartItems } from '../Cart/CartItems';
import { updateCurrency } from '../../actions/actions';
import { Redirect } from 'react-router-dom';
import { CartWithdraw } from '../Cart/CartWithdraw';
import PropTypes from 'prop-types';

import './account.scss';
import { infoToastAutoclose } from '../../tools/toasts';

function Account({ account, updateCurrency, cur }) {
    const { email, username } = account;
    const changeCurrency = e => {
        e.preventDefault();
        updateCurrency(e.target.value)
    }
    const redirect = () => {
        infoToastAutoclose("You need to authorize.")
        return <Redirect to="/auth" />
    }
    return (
        <>
            {account._id ?
                (<div className="account">
                    <ScrollToTop />
                    <div className="account__wrapper wrapper">
                        <div className="account__info">
                            <div className="account__info__wrapper">
                                <h3 className="account__header">{username}</h3>
                                <div className="account__contacts">
                                    <div>Email:</div>
                                    <div className="account__email">{email}</div>
                                </div>
                                <select onChange={changeCurrency} value={cur}>
                                    <option value="byr">currency</option>
                                    <option value="byr">Br</option>
                                    <option value="usd">$</option>
                                    <option value="eur">€</option>
                                    <option value="rub">₽</option>
                                </select>
                            </div>
                            <CartWithdraw />
                        </div>
                        <div className="account__cart">
                            <CartItems />
                        </div>
                    </div>
                </div>) : redirect()
            }
        </>
    );
}

Account.propTypes = {
    account: PropTypes.shape({
        _id: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        currency: PropTypes.string.isRequired,
        totalPrice: PropTypes.number,
        cart: PropTypes.arrayOf(PropTypes.exact({
           _id: PropTypes.string.isRequired,
           serviceId: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           type: PropTypes.string.isRequired,
           price: PropTypes.number.isRequired,
           description: PropTypes.string.isRequired,
           currentPrice: PropTypes.exact({
               price: PropTypes.number.isRequired,
               symbol: PropTypes.string.isRequired
           })
        }))
    }),
    cur: PropTypes.string.isRequired,
    updateCurrency: PropTypes.func.isRequired
}

const mapState = state => ({
    account: state.account,
    cur: state.goodReducer.currency
});

const mapDispatch = dispatch => ({
    updateCurrency(c) {
        dispatch(updateCurrency(c))
    }
});

export default connect(mapState, mapDispatch)(Account);