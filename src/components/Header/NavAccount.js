import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logOut } from '../../actions/actions';

const NavAccount = ({ name, logOut }) => {
    if (name) {
        return (
            <div className="dropdown-menu nav-link">
                <i className="fas fa-user"></i>
                <nav className="dropdown-menu__components shadow">
                    <Link to="/account" className="dropdown-menu__component">{name}<i className="fas fa-user"></i></Link>
                    <div className="dropdown-menu__component" onClick={() => logOut()}>log out<i className="fas fa-sign-out-alt"></i></div>
                </nav>
            </div>
        );
    }
    return (
        <div className="dropdown-menu nav-link" >
            <i className="fas fa-user"></i>
            <nav className="dropdown-menu__components shadow">
                <Link to="/account" className="dropdown-menu__component">account<i className="fas fa-user"></i></Link>
                <Link to="/auth" className="dropdown-menu__component">sing in<i className="fas fa-sign-in-alt"></i></Link>
            </nav>
        </div>
    );
}

const mapState = state => ({
    name: state.account.username
});

const mapDispatch = dispatch => ({
    logOut() {
        dispatch(logOut())
    }
})

export default connect(mapState, mapDispatch)(NavAccount);