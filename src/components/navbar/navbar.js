import React from 'react';
import NavStyle from "./navBar.module.scss";

export const NavBar = () => {
    return (
        <nav className={NavStyle.navContainer}>
            <ul className={NavStyle.listStyle}>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}