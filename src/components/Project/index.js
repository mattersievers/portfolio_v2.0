import React from "react";
import Fade from 'react-reveal/Fade';

const Project = (props) => {
  
  if (props.projectIndex%2) {
    return (
        <Fade bottom right duration={2000}>
        <section className="project">
                <div className="container">
                    <img className="projectImg" src={require(`../../assets/pics/${props.project.name}.png`).default} alt={props.project.name} ></img>
                    <a href={props.project.link} target="_blank" rel="noreferrer" className="websiteLink disappearingProject darkTextClickable"><h1 className="projectTitle darkTextClickable">{props.project.name}</h1></a>
                    <a href={props.project.repo} target="_blank" rel="noreferrer" className="repoLink disappearingProject"><img className="repoImage" src={require(`../../assets/icons/GitHub-Mark-32px.png`).default} alt="GitHub"/></a>
                    <button className="projectInfoButton disappearingProject darkTextClickable" id={props.projectIndex} onClick={props.handleInfo}>more info</button>
                </div>    
        </section>
        </Fade>
    )
  }
  else{
      return(
        <Fade bottom left duration={2000}>
        <section className="project">
                <div className="container">
                    <img className="projectImg" src={require(`../../assets/pics/${props.project.name}.png`).default} alt={props.project.name} ></img>
                    <a href={props.project.link} target="_blank" rel="noreferrer" className="websiteLink disappearingProject darkTextClickable"><h1 className="projectTitle darkTextClickable">{props.project.name}</h1></a>
                    <a href={props.project.repo} target="_blank" rel="noreferrer" className="repoLink disappearingProject"><img className="repoImage" src={require(`../../assets/icons/GitHub-Mark-32px.png`).default} alt="GitHub"/></a>
                    <button className="projectInfoButton disappearingProject darkTextClickable"  id={props.projectIndex} onClick={props.handleInfo}>more info</button>
                </div>    
        </section>
        </Fade>
      )
  }
   
}

export default Project;