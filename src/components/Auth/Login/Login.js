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
                    <label for="login">Login:</label><br />
                    <input id="login" type="email" autoSave />
                </div>
                <div className="login__body_password">
                    <label for="password">Password:</label><br />
                    <input id="password" type="password" min={8} />
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