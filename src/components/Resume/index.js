import React from "react";
import { Rotate } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

const Resume = () => {
    return (
        <section className="resumeSection d-flex flex-column align-items-center justify-content-between">
            <Rotate top left duration={2000}>
                <a href="https://drive.google.com/file/d/1mQV6_A6ElUt6uPYaEiEOxWC45VE1semS/view?usp=sharing" className="resumeLink ">Full Resume PDF</a>
            </Rotate>
            <Rotate top right duration={2000}>
                <div className="proficiencyListDiv d-flex flex-column align-items-center">
                    <h2 className="proficiencyListTitle align-self-center">Languages and Skills</h2>
                    <ul className="proficiencyList d-flex flex-wrap align-items-center col-8 justify-content-around">
                        <li>
                            <div title="HTML"><FontAwesomeIcon icon="fab fa-html5"/></div>
                            <div title="CSS"><FontAwesomeIcon icon="fab fa-css3"/></div>
                            <div title="JavaScript"><FontAwesomeIcon icon="fab fa-js"/></div>
                        </li>
                        <li>MongoDB/Express
                            <div title="MongoDB"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg></div>
                            <div title="Express.js"></div>
                            <div title="React"><FontAwesomeIcon icon="fab fa-react" /></div>
                            <div title="Node.js"><FontAwesomeIcon icon="fab fa-node-js" /></div>
                        </li>
                        <li>SQL/Sequelize</li>
                        <li>JQuery/
                            <div title="Bootstrap"><FontAwesomeIcon icon="fab fa-bootstrap" /></div>
                            Handlebars</li>
                        <li>RESTful APIs/GraphQL
                            <div title="AWS"><FontAwesomeIcon icon="fab fa-aws" /></div></li>      
                    </ul>
                </div>
            </Rotate>
        </section>
    )
}

export default Resume;