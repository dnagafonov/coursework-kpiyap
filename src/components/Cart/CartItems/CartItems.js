import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './cart-items.scss'
import { updateCurrencyInCart } from '../../../actions/actions';
import { ListGoods } from '../../ListGoods';

function CartItems({ items, currency }) {
    useEffect(() => {
        updateCurrencyInCart(items, currency);
    }, [items, currency]);
    const ready = <ListGoods list={items} />
    return (
        <div className="cart-items">
            {items ? ready : <h3>Cart is empty</h3>}
        </div>
    );
}

const mapState = state => ({
    items: state.account.cart,
    currency: state.goodReducer.currency
});

export default connect(mapState)(CartItems);