import React from "react";
import Navigation from '../Navigation';

const Header = (props) => {
    return (
        <section className="d-flex flex-row justify-content-between header">
            <h1 className="navbar-header myName">Matthew Sievers</h1>
            <Navigation
            pages={props.pages}
            currentPageSelection={props.currentPageSelection}
            setCurrentPageSelection = {props.setCurrentPageSelection}
            />
        </section>
    )
}

export default Header;