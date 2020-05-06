import React from 'react';
import './auth.scss';
import { connect } from 'react-redux';
import { Login } from './Login';
import { Register } from './Register';

function Auth (props) {
    
    return (
       <div className="auth">
           <div className="wrapper auth__wrapper">
               <Login />
               <Register />
           </div>
       </div>
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

export default connect(null, mapDispatch)(Auth);