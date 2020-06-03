import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateWithdrawData } from '../../../actions/actions'
import './cart-withdraw.scss'

const CartWithdraw = ({ cart, updateWithdrawData, totalPrice, currency }) => {
    useEffect(() => {
        if (cart.length > 0)
            updateWithdrawData(cart);
    }, [cart, updateWithdrawData])
    return (
        <div className="cart-withdraw">
            <div className="cart-withdraw__total">Total: { cart.length ? totalPrice : 0 + " " + currency}</div>
            <button className="btn-general">Checkout!</button>
        </div>
    )
}


const mapStateToProps = state => ({
    cart: state.account.cart,
    currency: state.account.currency,
    totalPrice: state.account.totalPrice
})

const mapDispatchToProps = dispatch => ({
    updateWithdrawData(cart) {
        dispatch(updateWithdrawData(cart))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartWithdraw)
