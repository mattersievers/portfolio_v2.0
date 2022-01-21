import React, {useState} from "react";
import headshot from "../../assets/pics/headshot.jpg";
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';

const AboutMe = () => {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count + 1);
        return count}, 24000);
    return(
        <section className="aboutMe d-flex flex-column flex-wrap">
            <Fade left>
                <Jello spy={count} duration={5000}>
                <img alt="A very studious Matthew" src={headshot}/>
                </Jello>
            </Fade>

            <Jello spy={count} duration={5000}>
            <div>
            <Fade right>    
                <p>
                    Full stack web developer with a certificate in Full Stack Web Development from the University of Texas and masters in Mathematics. Experience with JavaScript, HTML, CSS, MongoDB, Express, React, Node, SQL, and more. I have contributed code to all areas of projects from back-end databases to front-end styling and everything in between. I look forward to larger collaborative projects where I can apply my full stack of skills to create and refactor code that engages and retains users.
                </p>
            </Fade>
            </div>
            </Jello>

        </section>
    )
}

export default AboutMe;