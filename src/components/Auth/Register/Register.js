import React, { useState } from 'react';
import './register.scss';
import { connect } from 'react-redux';
import { checkPasswordsValidation } from '../../../tools/check-passwords-validation';
import { authorization } from '../../../tools/authorization';
import { checkPasswordValid } from '../../../tools/check-password-valid';
import { accountPath } from '../../../tools/config';

function Register(props) {
    const [password, setPassword] = useState({
        symbol: <i className="far fa-times-circle"></i>
    });
    const [confirm, setConfirm] = useState({
        symbol: <i className="far fa-times-circle"></i>
    });
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [isConfSymbol, setIsConfSymbol] = useState(false);
    const [isPasSymbol, setIsPasSymbol] = useState(false);
    const changePassword = event => {
        event.preventDefault();
        setIsPasSymbol(true);
        if(!checkPasswordValid(event.target.value)){
            setPassword({
                symbol: <i className="far fa-times-circle"></i>,
                value: event.target.value
            })
        }
        else setPassword({
            symbol: <i className="far fa-check-circle"></i>,
            value: event.target.value
        });
    }

    const changePasswordConfirm = event => {
        event.preventDefault();
        setIsConfSymbol(true);
        if (password.value !== event.target.value) {
            setConfirm({
                symbol: <i className="far fa-times-circle"></i>,
                value: event.target.value
            })
            console.log(event.target.value)
        }
        else setConfirm({
            symbol: <i className="far fa-check-circle"></i>,
            value: event.target.value
        });
    }

    const changeEmail = e => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const changeUsername = e => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkPasswordsValidation(password.value, confirm.value)) {
            console.log(2)
            authorization( accountPath, {
                username,
                password: password.value,
                email,
                currency: "byr"
            }).then(res => {
                console.log(res);;
            }).catch(e => console.error(e))
        }
    }

    return (
        <form className="register shadow" onSubmit={handleSubmit}>
            <div className="register__header shadow">sing up</div>
            <div className="register__body">
                <div className="register__body__wrapper">
                    <div className="register__body_login">
                        <label htmlFor="register-username">Username:</label><br />
                        <input id="register-username" type="text" onChange={changeUsername}/>
                    </div>
                    <div className="register__body_email">
                        <label htmlFor="register-email">Email:</label><br />
                        <input id="register-email" type="email" onChange={changeEmail}/>
                    </div>
                    <div className="register__body_password">
                        <label htmlFor="register-password">Password:</label><br />
                        <input id="register-password" type="password" min={8} title="minimum 8 symbols, a least 1 uppercase, a least 1 special symbol" onChange={changePassword} />
                        {isPasSymbol ? password.symbol : null} <br />
                        <label htmlFor="password-confirm">Confirm password:</label><br />
                        <input id="password-confirm" type="password" min={8} onChange={changePasswordConfirm} />
                        {isConfSymbol ? confirm.symbol : null}
                    </div>
                </div>
            </div>
            <div className="register__footer">
                <input className="btn-general" type="submit" value="Confirm" />
            </div>
        </form>
    );
}

const mapDispatch = dispatch => ({
    logIn(login, password) {
        dispatch()
    }
})

export default connect(null, mapDispatch)(Register);