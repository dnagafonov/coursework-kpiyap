import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateWithdrawData, createNewOffer } from '../../../actions/actions'
import './cart-withdraw.scss'
import { ExportToExcel } from '../../ExportToExcel'

const CartWithdraw = ({ updateWithdrawData, createNewOffer, account }) => {
    const { cart, currency, totalPrice } = account;
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
        if(cart.length > 0){
            createNewOffer(account, message);
        }
    }
    return (
        <div className="cart-withdraw">
            <div className="cart-withdraw__total">Total: {cart.length ? totalPrice : 0 + " " + currency}</div>
            <button className="btn-general" onClick={handleClicked}>Checkout!</button>
        </div>
    )
}


const mapStateToProps = state => ({
    account: state.account
})

const mapDispatchToProps = dispatch => ({
    updateWithdrawData(cart) {
        dispatch(updateWithdrawData(cart));
    },
    createNewOffer(account, modalMessage){
        dispatch(createNewOffer(account, modalMessage));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartWithdraw)
