import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [pages] = useState(['About', 'Portfolio', 'Resume', 'Contact']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);

  const projects = [
    {
      name:"Budget Tracker",
      link:"https://tranquil-dawn-49463.herokuapp.com/",
      technology:"IndexedDb and Cache Storage",
      description:""
    },
    {
      name:"gripeSUPPORT",
      link:"https://sheltered-scrubland-76347.herokuapp.com/",
      technology:"SQL/express/handlebars",
      description:"Collaboration"
    },
    {
      name:"Pizza Hunt",
      link:"https://vast-castle-22444.herokuapp.com/",
      technology:"MongoDB",
      description:""
    },
    {
      name:"Zoo Keepr",
      link:"https://thawing-lake-23506.herokuapp.com/",
      technology:"",
      description:""
    },
    {
      name:"Note Taker",
      link:"https://still-reef-94252.herokuapp.com/",
      technology:"",
      description:""
    },
    {
      name:"Tech Blog",
      link:"https://sleepy-earth-77165.herokuapp.com/",
      technology:"",
      description:""
    }

  ]

  return (
    <div className="pageContent d-flex flex-column justify-content-between">
      <Header
      pages={pages}
      currentPageSelection = {currentPageSelection}
      setCurrentPageSelection = {setCurrentPageSelection} />
      
      <main className="">

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
