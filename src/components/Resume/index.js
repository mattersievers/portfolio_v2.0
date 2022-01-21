import React from "react";
import { Rotate } from "react-reveal";

const Resume = () => {
    return (
        <section className="resumeSection d-flex flex-column align-items-center justify-content-center">
            <Rotate top left duration={2000}>
                <a href="https://drive.google.com/file/d/1mQV6_A6ElUt6uPYaEiEOxWC45VE1semS/view?usp=sharing" className="resumeLink ">Full Resume PDF</a>
            </Rotate>
            <Rotate top right duration={2000}>
                <ul className="proficiencyList d-flex flex-wrap align-items-center col-8 justify-content-between">
                    <li>MongoDB/Mongoose/NoSQL</li>
                    <li>SQL/Sequelize</li>
                    <li>Express/React/Node.js</li>
                    <li>HTML/CSS/JavaScript</li>
                    <li>JQuery/Bootstrap/Handlebars</li>
                    <li>RESTful APIs/GraphQL</li>      
                </ul>
            </Rotate>
        </section>
    )
}

export default Resume;