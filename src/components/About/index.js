import React from "react";
import headshot from "../../assets/pics/headshot.jpg"
const AboutMe = () => {
    return(
        <section className="aboutMe d-flex flex-column justify-content-around flex-wrap">
            <img className="align-self-center" alt="A very studious Matthew" src={headshot}/>
            <div className="align-self-center">
            <p className="">
            Full stack web developer with a certificate in Full Stack Web Development from the University of Texas and masters in Mathematics. Experience with JavaScript, HTML, CSS, MongoDB, Express, React, Node, SQL, and more. I have contributed code to all areas of projects from back-end databases to front-end styling and everything in between. I look forward to larger collaborative projects where I can apply my full stack of skills to create and refactor code that engages and retains users.
            </p>
            </div>
        </section>
    )
}

export default AboutMe;