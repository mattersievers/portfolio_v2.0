import React from "react";

const Project = (prop) => {
    console.log(prop)
    return (
        <section className="project">
            <img src={require(`../../assets/pics/${prop.project.name}.png`).default} alt={prop.project.name} /> 
        </section>
    )
}

export default Project;