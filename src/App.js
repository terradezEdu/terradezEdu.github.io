import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './container/Navbar/navbar';
import Home from './container/Home/Home';
import Bio from './container/Bio/bio';
import Researchs from './container/Researchs/researchs';
import ProjectsL from './container/Projects/projects_large';
import ProjectsS from './container/Projects/projects_small';
import Footer from "./container/footer/footer";

export default function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <div className='container' style={{textAlign: 'center'}}>
        <Home></Home>
        <Bio></Bio>
      </div>
      <div className='float-left'>
        <Researchs></Researchs>
      </div>
      <div>
        {isDesktop ? (
          <ProjectsL></ProjectsL>
        ) : (
          <ProjectsS></ProjectsS>
        )}
      </div>
      <footer>
        <Footer></Footer>     
      </footer>
    </div>
  );
}