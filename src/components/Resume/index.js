import React from "react";

const Resume = () => {
    return (
        <section className="resumeSection d-flex flex-column align-items-center">
            <a href="https://drive.google.com/file/d/1mQV6_A6ElUt6uPYaEiEOxWC45VE1semS/view?usp=sharing" className="resumeLink ">Full Resume PDF</a>
            <ul className="proficiencyList d-flex flex-column justify-content-between flex-wrap align-items-center">
                <li>MongoDB/Mongoose/NoSQL</li>
                <li>SQL/Sequelize</li>
                <li>Express/React/Node.js</li>
                <li>HTML/CSS/JavaScript</li>
                <li>JQuery/Bootstrap/Handlebars</li>
                <li>RESTful APIs/GraphQL</li>
                
            </ul>
        </section>
    )
}

export default Resume;