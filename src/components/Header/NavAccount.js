import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logOut } from '../../actions/actions';

const NavAccount = ({ name, logOut }) => {
    if (name) {
        return (
            <Link className="nav-account" to="/account">
                <i className="fas fa-user"></i>
                <nav className="nav-account__components shadow">
                    <Link to="/account">{name}<i className="far fa-user"></i></Link>
                    <Link to="/cart">cart<i className="fas fa-shopping-cart"></i></Link>
                    <a  onClick={() => logOut()}>log out<i className="fas fa-sign-out-alt"></i></a>
                </nav>
            </Link>
        );
    }
    return (
        <Link className="nav-account" to="/account">
            <i className="fas fa-user"></i>
            <nav className="nav-account__components shadow">
                <Link to="/auth">log in<i className="far fa-user"></i></Link>
            </nav>
        </Link>
    );
}

const mapState = state => ({
    name: state.account.username
});

const mapDispatch = dispatch => ({
    logOut(){
        dispatch(logOut())
    }
})

export default connect(mapState, mapDispatch)(NavAccount);