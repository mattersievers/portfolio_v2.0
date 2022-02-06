import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import projects from './utils/projectList';
import InfoModal from './components/InfoModal';
import { Fade } from 'react-reveal';

function App() {
  const [pages] = useState(['About', 'Portfolio', 'Resume', 'Contact']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);
  const [currentprojectindex, setCurrentProjectIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const handleInfoClose = () => setShowInfo(false);
  const handleInfo = (event) => {
    event.preventDefault();
    setCurrentProjectIndex(event.target.id)
    setShowInfo(true);
  }
  
  
  return (
    <div className="pageContent d-flex flex-column justify-content-between">
      <Header
      pages={pages}
      currentPageSelection = {currentPageSelection}
      setCurrentPageSelection = {setCurrentPageSelection} />
      
      <main>

        {currentPageSelection === "About" && 
        <AboutMe />
        }

        {currentPageSelection === 'Portfolio' &&
          <>
            <div className="d-flex flex-wrap justify-content-around">
              {projects.map((project, i) =>(
                  <Project
                  key={i}
                  project={project}
                  projectIndex={i}
                  handleInfo={handleInfo}
                  handleInfoClose={handleInfoClose}
                  />      
              ))}
            </div>
            <InfoModal
                  show = {showInfo}
                  onHide = {handleInfoClose}
                  currentprojectindex={currentprojectindex}
                  projects={projects}
            />
          </>
        }
        
        {currentPageSelection === "Resume" && 
        <Resume />
        }

        {currentPageSelection === "Contact" && 
        <Contact />
        }

      </main>
      
      <footer>
      <Footer />
      </footer>

    </div>    
  );
}

export default App;
