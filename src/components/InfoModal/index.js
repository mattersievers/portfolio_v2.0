import React from "react";
import { Modal, Button } from "react-bootstrap";

const InfoModal = (props) => {
    const {currentprojectindex, projects} = props;
    const currentProject = projects[currentprojectindex];
   

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation-duration={2000}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <h1><a className="text-dark" href={currentProject.link}>{currentProject.name}</a></h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{currentProject.technology}</h5>
                <p>
                {currentProject.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <a href={currentProject.repo} target="_blank" rel="noreferrer" className=""><img className="repoImage" src={require(`../../assets/icons/GitHub-Mark-32px.png`).default} alt="GitHub"/></a>
                <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default InfoModal;