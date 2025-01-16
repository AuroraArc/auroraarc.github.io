import React from 'react';
import '../assets/index.css'; // Import the CSS file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-arrow">→</div>
    </div>
  );
};

export default ProjectCard;