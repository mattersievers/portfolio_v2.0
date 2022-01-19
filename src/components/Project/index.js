import React from "react";
import Fade from 'react-reveal/Fade';

const Project = (prop) => {
  console.log(prop)
  
  if (prop.projectIndex%2) {
    return (
        <Fade right>
        <section className="project">
                <div className="container">
                    <img className="projectImg" src={require(`../../assets/pics/${prop.project.name}.png`).default} alt={prop.project.name} ></img>
                    <a href={prop.project.link} target="_blank" rel="noreferrer" className="websiteLink disappearingProject"><h1 className="projectTitle">{prop.project.name}</h1></a>
                    <a href={prop.project.repo} target="_blank" rel="noreferrer" className="repoLink disappearingProject"><img src={require(`../../assets/icons/GitHub-Mark-32px.png`).default} alt="GitHub"/></a>
                    <p className="describeProject disappearingProject">{prop.project.description}</p>
                </div>    
        </section>
        </Fade>
    )
  }
  else{
      return(
        <Fade left>
        <section className="project">
                <div className="container">
                    <img className="projectImg" src={require(`../../assets/pics/${prop.project.name}.png`).default} alt={prop.project.name} ></img>
                    <a href={prop.project.link} target="_blank" rel="noreferrer" className="websiteLink disappearingProject"><h1 className="projectTitle">{prop.project.name}</h1></a>
                    <a href={prop.project.repo} target="_blank" rel="noreferrer" className="repoLink disappearingProject"><img src={require(`../../assets/icons/GitHub-Mark-32px.png`).default} alt="GitHub"/></a>
                    <p className="describeProject disappearingProject">{prop.project.description}</p>
                </div>    
        </section>
        </Fade>
      )
  }
    
}

export default Project;