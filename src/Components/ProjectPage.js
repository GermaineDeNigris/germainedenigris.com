import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectDataDetail from '../ProjectDataDetail';

function ProjectPage() {
  const { projectId } = useParams();
  const project = projectDataDetail[projectId];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const imageUrl = windowWidth >= 768 ? project.imageUrl : project.mobileImageUrl;

  const renderToolsUsed = (tools) => {
    return tools.map((tool, index) => (
      <li key={index}>{tool}</li> 
    ));
  };

  return (
    <main className="project-page">
      <section className="project-overview">
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
      </section>

      <section className="project-details">
        <img src={imageUrl} alt={`${project.title} Preview`} className="project-image" />
        <div className="project-info">
          <h2>Project Overview</h2>
          <p>{project.fullDescription}</p>

          <h2>Tools Used</h2>
          <ul className="skills-list">
            {renderToolsUsed(project.toolsUsed)}
          </ul>

          <h2>See Live</h2>
          <div className="project-links">
            <a href={project.liveProjectUrl} className="live-button" target="_blank" rel="noopener noreferrer">
              Live Link
            </a>
            <a href={project.codeUrl} className="code-button" target="_blank" rel="noopener noreferrer">
              Code Link
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
