import { useEffect, useState } from 'react';
import config from '../../gitprofile.config';
import '../assets/index.css'; // Import the CSS file
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const projects = config.externalProjects;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`fade-in h-screen bg-${config.themeConfig.customTheme['base-100']}`}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col items-center p-4 lg:p-10 min-h-full">
          <h1 className="text-3xl font-bold text-base-content text-center projects-title">Projects</h1>
          <p className="text-base-content text-opacity-70 text-center mt-2">
          </p>
          <div className="projects-container mt-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}
      <div className="bottom-space"></div> {}
    </div>
  );
};

export default Projects;