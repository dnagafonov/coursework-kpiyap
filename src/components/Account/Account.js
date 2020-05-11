import React from 'react';
import './account.scss';
import { connect } from 'react-redux';
import { ScrollToTop } from '../ScrollToTop';
import { CartItems } from '../Cart/CartItems';

function Account({account}) {
    const {email, username} = account;
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
                </div>
                <div className="account__cart">
                    <CartItems/>
                </div>
            </div>
        </div>
    );
}

const mapState = state => ({
    account: state.account
})

export default connect(mapState)(Account);