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
        },
        {
            url: "cart",
            name: <i className="fas fa-shopping-cart"></i>
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