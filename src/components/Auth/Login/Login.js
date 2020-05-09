import React from 'react';
import './login.scss';
import { connect } from 'react-redux';
import { logIn } from '../../../actions/actions';

function Login({ logIn }) {
    return (
        <form className="login shadow">
            <div className="login__header shadow">sing in</div>
            <div className="login__body">
                <div className="login__body_login">
                    <label htmlFor="login-username">Login:</label><br />
                    <input id="login-username" type="email" />
                </div>
                <div className="login__body_password">
                    <label htmlFor="login-password">Password:</label><br />
                    <input id="login-password" type="password" min={8} />
                </div>
            </div>
            <div className="login__footer">
                <input className="btn-general" type="submit" />
            </div>
        </form>
    );
}

const mapDispatch = dispatch => ({
    logIn(login, password) {
        dispatch(logIn(login, password))
    }
})

export default connect(null, mapDispatch)(Login);