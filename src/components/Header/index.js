import React from "react";
import Navigation from '../Navigation';

const Header = () => {
    return (
        <section className="d-flex flex-row justify-content-between header">
            <h1 className="navbar-header myName">Matthew Sievers</h1>
            <Navigation />
        </section>
    )
}

export default Header;