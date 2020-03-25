import React from 'react';
import './header.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <nav className="header">
                <Link to="/" className="logo">
                    <i class="fa fa-car-crash"></i>
                    <div className="logo__name"> autoservice</div>
                </Link>
                <ul className="header__navigation">
                    <li><Link to="/about-us">about us</Link></li>
                    <li><Link to="spares">spares</Link></li>
                    <li><Link to="services">services</Link></li>
                    <li className="cart">
                        <Link to="cart"><i class="fas fa-shopping-cart"></i></Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
}

export default Header;