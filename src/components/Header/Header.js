import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { switchActivePage } from '../../actions/actions';

const Header = ({ switchActive }) => {
    const topics = [
        {
            url: "about-us",
            name: "about us"
        },
        {
            url: "spares",
            name: "spares"
        },
        {
            url: "services",
            name: "services"
        }];

    const links = topics.map(link => {
        const linkProps = {
            key: link.name,
            to: link.url,
            onClick: switchActive(link.url)
        };
        return (<Link {...linkProps}>{link.name}</Link>)
    });
    return (
        <div className="header">
            <div className="wrapper header__wrapper">
                <Link to="/" className="logo">
                    <i className="fa fa-car-crash"></i>
                    <div className="logo__name"> autoservice</div>
                </Link>
                <nav className="header__navigation">
                    {links}
                    <Link className="account" to="/account">
                        <i className="fas fa-user"></i>
                        <nav className="account__components shadow">
                            <Link to="/account">account<i class="far fa-user"></i></Link>
                            <Link to="/cart">cart<i className="fas fa-shopping-cart"></i></Link>
                            <Link>log out<i className="fas fa-sign-out-alt"></i></Link>
                        </nav>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    switchActive(page) {
        dispatch(switchActivePage(page))
    }
});

export default connect(null, mapDispatchToProps)(Header);