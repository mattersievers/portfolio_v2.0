import React from "react";

const Project = (prop) => {
    console.log(prop)
    return (
        <section className="project">
                <div className="container">
                    <img className="projectImg" src={require(`../../assets/pics/${prop.project.name}.png`).default} alt={prop.project.name} ></img>
                    <h1 className="projectTitle disappearingProject">{prop.project.name}</h1>
                    <a href={prop.project.link} target="_blank" rel="noreferrer" className="websiteLink disappearingProject">website</a>
                    <a href={prop.project.repo} target="_blank" rel="noreferrer" className="repoLink disappearingProject">github</a>
                    <p className="describeProject disappearingProject">{prop.project.description}</p>
                </div>    
        </section>
    )
}

export default Project;