import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import projects from './utils/projectList';

function App() {
  const [pages] = useState(['About', 'Portfolio', 'Resume', 'Contact']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);

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
            {projects.map((project,i) =>(
              <Project
                project={project}
                key={i}
                projectIndex={i}
                />
            ))}
          </div>
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
