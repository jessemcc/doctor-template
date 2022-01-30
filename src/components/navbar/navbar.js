import React from 'react';
import NavStyle from "./navBar.module.scss";
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    return (
        <nav className={NavStyle.navContainer}>
            <ul className={NavStyle.listStyle}>
                <li>
                    <HashLink 
                        className={NavStyle.linkStyle} 
                        to="../about/about.js#aboutHash">
                        About
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        className={NavStyle.linkStyle}
                        to="../services/services.js#servicesHash">
                        Services
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        className={NavStyle.linkStyle}
                        to="../contact/contact.js#contactHash">
                        Contact Us
                    </HashLink>
                </li>
            </ul>
        </nav>
    )
}