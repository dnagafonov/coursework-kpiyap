import React from 'react';
import './auth.scss';
import { Login } from './Login';
import { Register } from './Register';
import { ScrollToTop } from '../ScrollToTop';

function Auth() {
    return (
        <div className="auth">
            <div className="auth__wrapper wrapper">
                <ScrollToTop />
                <Login />
                <Register />
            </div>
        </div>
    );
}

export default Auth;