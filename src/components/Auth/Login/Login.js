import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setExistAccount } from '../../../actions/actions';
import PropTypes from 'prop-types';

import './login.scss';

function Login({ setExistAccount }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length > 0 && username.length > 0){
            setExistAccount(username, password);
            setUsername("");
            setPassword("");
        }
    }
    const changeUsername = e => {
        e.preventDefault();
        setUsername(e.target.value);
    }
    const changePassword = e => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    return (
        <form className="login shadow">
            <div className="login__header shadow">Login</div>
            <div className="login__body">
                <div className="login__body_login">
                    <label htmlFor="login-username">Login:</label><br />
                    <input id="login-username" type="text" value={username} onChange={changeUsername}/>
                </div>
                <div className="login__body_password">
                    <label htmlFor="login-password">Password:</label><br />
                    <input id="login-password" type="password" value={password} min={8} onChange={changePassword} />
                </div>
            </div>
            <div className="login__footer">
                <input className="btn-general" type="submit" value="Confirm" onClick={handleSubmit}/>
            </div>
        </form>
    );
}

Login.propTypes = {
    setExistAccount: PropTypes.func.isRequired
}

const mapDispatch = dispatch => ({
    setExistAccount(username, password) {
        dispatch(setExistAccount(username, password))
    }
})

export default connect(null, mapDispatch)(Login);