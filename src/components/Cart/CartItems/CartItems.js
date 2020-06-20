import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCurrencyInCart } from '../../../actions/actions';
import { ListGoods } from '../../ListGoods';
import PropTypes from 'prop-types'

import './cart-items.scss'

function CartItems({ cart, currency, updateCurrencyInCart }) {
    useEffect(() => {
        if(cart.length){
            updateCurrencyInCart(cart, currency);
        }
        // eslint-disable-next-line
    }, [currency]);
    const ready = <ListGoods enableDelete={true} list={cart} />
    return (
        <div className="cart-items">
            {cart.length ? ready : <h3>Cart is empty</h3>}
        </div>
    );
}

CartItems.propTypes = {
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
     })),
     currency: PropTypes.string.isRequired,
     updateCurrencyInCart: PropTypes.func.isRequired
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