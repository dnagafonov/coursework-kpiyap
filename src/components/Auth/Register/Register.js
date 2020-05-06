import React from 'react';
import './register.scss';
import { connect } from 'react-redux';

function Register (props) {
    return (
        <form className="register shadow">
            <div className="register__header shadow">sing up</div>
            <div className="register__body">
                <div className="register__body_login">
                    <label for="login">Username:</label><br />
                    <input id="login" type="email" autoSave />
                </div>
                <div className="register__body_email">
                    <label for="login">Email:</label><br />
                    <input id="login" type="email" autoSave />
                </div>
                <div className="register__body_password">
                    <label for="password">Password:</label><br />
                    <input id="password" type="password" min={8} /><br/>
                    <label for="password">Confirm password:</label><br />
                    <input id="password" type="password" min={8} />
                </div>
            </div>
            <div className="register__footer">
                <input className="btn-general" type="submit" />
            </div>
        </form>
    );
}

const mapDispatch = dispatch => ({
    logIn(login, password){
        dispatch()
    },
    logOut(){
        dispatch()
    }
})

export default connect(null, mapDispatch)(Register);