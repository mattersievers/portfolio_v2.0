import React from "react";

const Project = (prop) => {
    console.log(prop)
    return (
        <section>
            <h1>{prop.project.name}</h1>
        </section>
    )
}

export default Project;