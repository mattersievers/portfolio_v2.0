import React, {useState} from "react";
import Navigation from '../Navigation';
import Pulse from 'react-reveal/Pulse';

const Header = (props) => {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count + 1);
        return count }, 8000);
    return (
        <section className="d-flex flex-row justify-content-between flex-wrap header">
            <Pulse duration={3500} spy={count}>
                <h1 className="navbar-header myName">Matthew Sievers</h1>
            </Pulse>
            
            <Navigation
            pages={props.pages}
            currentPageSelection={props.currentPageSelection}
            setCurrentPageSelection = {props.setCurrentPageSelection}
            />
            
        </section>
    )
}

export default Header;