import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/index.css'; // Import the CSS file

const ProjectCard = ({ project }) => {
  const projectLink = `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link to={projectLink} className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-arrow">→</div>
    </Link>
  );
};

export default ProjectCard;