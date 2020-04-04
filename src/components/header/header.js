import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { switchActivePage } from '../../actions/actions';

const Header = ({switchActive}) => {
    let links = [
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
            name: <i class="fas fa-shopping-cart"></i>
        }]
    return (
        <div className="header">
            <div className="wrapper header__wrapper">
                <Link to="/" className="logo">
                    <i class="fa fa-car-crash"></i>
                    <div className="logo__name"> autoservice</div>
                </Link>
                <nav className="header__navigation">
                    {links.map(link => <Link to={link.url} onClick={() => switchActive(link.url)}>{link.name}</Link>)}
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