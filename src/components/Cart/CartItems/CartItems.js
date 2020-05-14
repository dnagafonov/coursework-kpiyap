import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './cart-items.scss'
import { updateCurrencyInCart } from '../../../actions/actions';
import { ListGoods } from '../../ListGoods';

function CartItems({ cart, currency, updateCurrencyInCart }) {
    useEffect(() => {
        if(cart.length){
            updateCurrencyInCart(cart, currency);
        }
    }, [currency]);
    const ready = <ListGoods list={cart} />
    return (
        <div className="cart-items">
            {cart.length ? ready : <h3>Cart is empty</h3>}
        </div>
    );
}

const mapState = state => ({
    cart: state.account.cart,
    currency: state.account.currency
});

const mapDispatch = dispatch => ({
    updateCurrencyInCart(cart, currency){
        dispatch(updateCurrencyInCart(cart, currency))
    }
})

export default connect(mapState, mapDispatch)(CartItems);