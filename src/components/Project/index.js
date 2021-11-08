import React from "react";

const Project = (prop) => {
    console.log(prop)
    return (
        <section className="project">
                <div className="container">
                    <img src={require(`../../assets/pics/${prop.project.name}.png`).default} alt={prop.project.name} ></img>
                    <a href={prop.project.link} target="_blank" rel="noreferrer" className="websiteLink">website</a>
                    <a href={prop.project.repo} target="_blank" rel="noreferrer" className="repoLink">github</a>
                </div>    
        </section>
    )
}

export default Project;