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
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
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
