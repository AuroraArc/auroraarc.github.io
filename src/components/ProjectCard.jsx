import React from 'react';
import '../assets/index.css'; // Import the CSS file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-card-hover">
        <div className="project-arrow">→</div>
      </div>
    </div>
  );
};

export default ProjectCard;