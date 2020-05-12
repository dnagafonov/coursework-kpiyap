import React, { useEffect, useState } from 'react';
import { ListGood } from '../../ListGood';
import { connect } from 'react-redux';
import { randomId } from '../../../tools/randomId';
import './cart-items.scss'
import { Redirect } from 'react-router-dom';
import { updateCurrencyInCart } from '../../../actions/actions';

function CartItems({ items, currency }) {
    const [toLoad, setToLoad] = useState(true);
    useEffect(() => {
        updateCurrencyInCart(items, currency);
    }, [items, currency]);
    return (
        <>
            {items ?
                <div className="cart-items">
                    {items.map(e => <ListGood key={randomId()} name={e.name} price={e.currentPrice.price + " " + e.currentPrice.symbol} />)}
                </div> : <Redirect to="/auth" />
            }
        </>
    );
}

const mapState = state => ({
    items: state.account.cart,
    currency: state.goodReducer.currency
});

export default connect(mapState)(CartItems);