import React from 'react';
import dashboardImage from '../assets/images/dashboard.png'
import avatarImage from '../assets/images/avatar.jpg'
import groceryListImage from '../assets/images/grocery-list.png'
import { useNavigate } from 'react-router-dom';

function MainGrid() {
    
  const navigate = useNavigate();

  const navigateToProjectPage = (projectId) => {
    const url = `/project/${projectId}`;
    navigate(url);
    window.scrollTo(0, 0);
  
  
};

  return (
    <div className="grid-container" >

    {/* grid item 1 */}
    <div className="grid-item" id="about">
        <img src={avatarImage} alt="Germaine's Avatar" className="centered-image" />
      </div>  

   {/* grid item 2 */}
    <div className="grid-item color-item">
        <div className="grid-text-content">
          <h2>Get to know me</h2>
          <p>My background is in product design and UI/UX. 
            I have a masters degree in Fashion Technology from IFA Paris. 
            This past year, I have been learning frontend development and recently completed Scrimba's Frontend Developer Bootcamp.
            When I'm not coding, I am traveling the world with my camera or curled up at home with a good book.
          </p>
        </div>
      </div>

    {/* grid item 3 */}
    <div className="grid-item skills">
      <div className="grid-text-content">
      <h2>My Skills</h2>
      <div className="skills-list">
        <span className="skill">HTML</span>
        <span className="skill">CSS</span>
        <span className="skill">JavaScript</span>
        <span className="skill">React</span>
        <span className="skill">Github</span>
        <span className="skill">Figma</span>
        <span className="skill">Firebase</span>
        <span className="skill">Bootstrap</span>
        <span className="skill">Node.js</span>
        <span className="skill">JQuery</span>
        <span className="skill">PostgreSQL</span>
        <span className="skill">Web3</span>
        </div>
      </div>
  </div>

{/* grid item 4 */}
<div className="grid-item project-item" id="projects">
  <img src={dashboardImage} alt="Personal Dashboard preview" className="centered-image" />
  <div className="overlay">
    <div className="overlay-content grid-text-content">
      <h2 id="project-header">Personal Dashboard</h2>
      <p>A Chrome Extension that provides an overview of the current time, weather conditions, and Bitcoin performance. It interacts with multiple APIs using asynchronous JavaScript to deliver real-time data.</p>
      <button className="orange-btn" onClick={() => navigateToProjectPage('personal-dashboard')}>Learn More</button>
    </div>
  </div>
</div>

{/* grid item 5 */}
<div className="grid-item project-item grocery-item">
  <img src={groceryListImage} alt="Grocery List preview" className="centered-image" />
  <div className="overlay">
    <div className="overlay-content grid-text-content">
      <h2 id="project-header">Grocery List</h2>
      <p>A simple and interactive grocery list application that allows users to add items to their shopping list, mark items as obtained, and manage their grocery needs efficiently.</p>
      <button className="orange-btn" onClick={() => navigateToProjectPage('grocery-list')}>Learn More</button>
    </div>
  </div>
</div>
    
    {/* grid item 6 */}
       <div className="grid-item" id="contact">
        <div className="grid-text-content">
          <h2 id="contact-header">Contact</h2>
          <p id="contact-paragraph">Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. 
            Send me an email at germainedenigris@gmail.com or call me directly at +33 07 49 21 33 45
          </p>
          <a href="https://raw.githubusercontent.com/GermaineDeNigris/CV/main/GermaineDenigrisResume.pdf" download="GermaineDenigrisResume.pdf" className="brick-btn">DOWNLOAD CV</a>
        </div>
      </div>
    </div>
  );
}

export default MainGrid;