import React from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { ScrollToTop } from '../ScrollToTop';
import { connect } from 'react-redux';
import { setExistAccount } from '../../actions/actions';
import { postNewAccount } from '../../actions/actions';

import './auth.scss';

function Auth({ setExistAccount, postNewAccount }) {
    return (
        <div className="auth">
            <div className="auth__wrapper wrapper">
                <ScrollToTop />
                <Login setExistAccount={setExistAccount} />
                <Register postNewAccount={postNewAccount} />
            </div>
        </div>
    );
}

export default connect(null, { setExistAccount, postNewAccount })(Auth);