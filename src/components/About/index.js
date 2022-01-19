import React from "react";
import headshot from "../../assets/pics/headshot.jpg";
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    return(
        <section className="aboutMe d-flex flex-column flex-wrap">
            <Fade left>
                <img alt="A very studious Matthew" src={headshot}/>
            </Fade>

            <div>
            <Fade right>    
                <p>
                    Full stack web developer with a certificate in Full Stack Web Development from the University of Texas and masters in Mathematics. Experience with JavaScript, HTML, CSS, MongoDB, Express, React, Node, SQL, and more. I have contributed code to all areas of projects from back-end databases to front-end styling and everything in between. I look forward to larger collaborative projects where I can apply my full stack of skills to create and refactor code that engages and retains users.
                </p>
            </Fade>
            </div>

        </section>
    )
}

export default AboutMe;