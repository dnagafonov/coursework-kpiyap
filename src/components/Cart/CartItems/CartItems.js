import React, { useEffect } from 'react';
import { ListGood } from '../../ListGood';
import { connect } from 'react-redux';
import { randomId } from '../../../tools/randomId';
import './cart-items.scss'
import { Redirect } from 'react-router-dom';

function CartItems({ items, currency }) {
    useEffect(() => {

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