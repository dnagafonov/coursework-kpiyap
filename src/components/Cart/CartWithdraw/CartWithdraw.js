import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateWithdrawData, openModal } from '../../../actions/actions'
import './cart-withdraw.scss'
import { ExportToExcel } from '../../ExportToExcel'

const CartWithdraw = ({ cart, updateWithdrawData, totalPrice, currency, openModal }) => {
    useEffect(() => {
        if (cart.length > 0)
            updateWithdrawData(cart);
    }, [cart, updateWithdrawData]);
    const message = (
        <div className="thanks-for-order text-container">
            <p>Thank you for your order! We will glad to see you another time!</p>
            <ExportToExcel>Export to excel</ExportToExcel>
        </div>
    );
    const handleClicked = e => {
        e.preventDefault();
        openModal(message);
    }
    return (
        <div className="cart-withdraw">
            <div className="cart-withdraw__total">Total: {cart.length ? totalPrice : 0 + " " + currency}</div>
            <button className="btn-general" onClick={handleClicked}>Checkout!</button>
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
        dispatch(updateWithdrawData(cart));
    },
    openModal(child) {
        dispatch(openModal(child));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartWithdraw)
