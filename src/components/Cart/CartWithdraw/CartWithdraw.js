import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateWithdrawData, createNewOffer } from '../../../actions/actions'
import { ExportToExcel } from '../../ExportToExcel'
import PropTypes from 'prop-types'

import './cart-withdraw.scss'

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
            <div className="cart-withdraw__total">Total: {(cart.length ? totalPrice : 0) + " " + currency}</div>
            <button className="btn-general" onClick={handleClicked}>Checkout!</button>
        </div>
    )
};

CartWithdraw.propTypes = {
    account: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
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
    updateWithdrawData: PropTypes.func.isRequired,
    createNewOffer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = dispatch => ({
    updateWithdrawData(cart) {
        dispatch(updateWithdrawData(cart));
    },
    createNewOffer(account, modalMessage){
        dispatch(createNewOffer(account, modalMessage));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartWithdraw)
