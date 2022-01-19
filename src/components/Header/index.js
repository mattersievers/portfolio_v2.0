import React from "react";
import Navigation from '../Navigation';
import Pulse from 'react-reveal/Pulse';

const Header = (props) => {
    return (
        <section className="d-flex flex-row justify-content-between flex-wrap header">
            <Pulse><h1 className="navbar-header myName">Matthew Sievers</h1></Pulse>
            
            <Navigation
            pages={props.pages}
            currentPageSelection={props.currentPageSelection}
            setCurrentPageSelection = {props.setCurrentPageSelection}
            />
            
        </section>
    )
}

export default Header;