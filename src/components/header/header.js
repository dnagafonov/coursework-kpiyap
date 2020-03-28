import React from 'react';
import './header.scss';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <div className="header">
                <div className="wrapper header__wrapper">
                    <Link to="/" className="logo">
                        <i class="fa fa-car-crash"></i>
                        <div className="logo__name"> autoservice</div>
                    </Link>
                    <nav className="header__navigation">
                        <Link to="/about-us">about us</Link>
                        <Link to="spares">spares</Link>
                        <Link to="services">services</Link>
                        <Link to="cart"><i class="fas fa-shopping-cart"></i></Link>
                    </nav>
                </div>
            </div>
        </Router>
    );
}

export default Header;