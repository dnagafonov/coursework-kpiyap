import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const NavAccount = ({ name }) => {
    if (name) {
        return (
            <Link className="nav-account" to="/account">
                <i className="fas fa-user"></i>
                <nav className="nav-account__components shadow">
                    <Link to="/account">{name}<i class="far fa-user"></i></Link>
                    <Link to="/cart">cart<i className="fas fa-shopping-cart"></i></Link>
                    <Link>log out<i className="fas fa-sign-out-alt"></i></Link>
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
    name: state.account.name
});

export default connect(mapState)(NavAccount);