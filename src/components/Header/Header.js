import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import NavAccount from './NavAccount';

const Header = () => {
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
            className: "nav-link",
            key: link.name,
            to: `/${link.url}`,
        };
        return (<Link {...linkProps}>{link.name}</Link>)
    });
    return (
        <div className="header shadow">
            <div className="header__wrapper wrapper">
                <Link to="/" className="logo">
                    <i className="fa fa-car-crash"></i>
                    <div className="logo__name"> autoservice</div>
                </Link>
                <nav className="header__navigation">
                    {links}
                    <NavAccount />
                </nav>
            </div>
        </div>
    );
}

export default Header;