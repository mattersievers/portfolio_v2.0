import React from "react";
import headshot from "../../assets/pics/headshot.jpg"
const AboutMe = () => {
    return(
        <section className="aboutMe d-flex flex-column justify-content-around flex-wrap">
            <img className="align-self-center" alt="A very studious Matthew" src={headshot}/>
            <div className="align-self-center">
            <p className="">
                I am a web developer that lives in Austin, Texas. I have experience with HTML, CSS, JavaScript, and Python. I obtained my masters in Mathematics from Texas State University in the Spring of 2017 and started teaching at Austin Community College shortly after.
                Like many people that live in the music capital, one of my favorite pastime hobbies includes playing music. I play several instruments including drums, bass, guitar, and trombone. I also have some experience with recording and production.
            </p>
            </div>
        </section>
    )
}

export default AboutMe;