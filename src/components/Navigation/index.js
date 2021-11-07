import React from "react";

const Navigation = () => {
    return (
        <section className="d-flex align-items-end">
            <ul className="d-flex flex-row justify-content-between">
                <li className="nav-item">
                    <a className="navBtn" href="#about">About Me</a>
                </li>
                <li className="nav-item ">
                    <a className="navBtn" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="navBtn" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="navBtn" href="#contact">Contact</a>
                </li>
            </ul>
        </section>
    )
}

export default Navigation;