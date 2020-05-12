import React from 'react';
import './account.scss';
import { connect } from 'react-redux';
import { ScrollToTop } from '../ScrollToTop';
import { CartItems } from '../Cart/CartItems';
import { updateCurrency } from '../../actions/actions';

function Account({account, updateCurrency, cur}) {
    const {email, username} = account;
    const changeCurrency = e => {
        e.preventDefault();
        updateCurrency(e.target.value)
    }
    return (
        <div className="account">
            <ScrollToTop />
            <div className="account__wrapper wrapper">
                <div className="account__info">
                    <h3 className="account__header">{username}</h3>
                    <div className="account__contacts">
                        <div>Email:</div>
                        <div className="account__email">{email}</div>
                    </div>
                    <select onChange={changeCurrency} value={cur}>
                        <option value="byr" >Br</option>
                        <option value="usd">$</option>
                        <option value="eur">€</option>
                        <option value="rub">₽</option>
                    </select>
                </div>
                <div className="account__cart">
                    <CartItems/>
                </div>
            </div>
        </div>
    );
}

const mapState = state => ({
    account: state.account,
    cur: state.goodReducer.currency
})

const mapDispatch = dispatch => ({
    updateCurrency(c){
        dispatch(updateCurrency(c))
    }
})

export default connect(mapState, mapDispatch)(Account);