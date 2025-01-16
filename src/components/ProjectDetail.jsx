import { useParams } from 'react-router-dom';
import config from '../../gitprofile.config';
import '../assets/index.css'; // Import the CSS file

const ProjectDetail = () => {
  const { projectName } = useParams();
  const project = config.externalProjects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectName);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">{project.title}</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">{project.description}</p>
      {project.imageUrl && (
        <div className="flex justify-center mt-4">
          <img src={project.imageUrl} alt={project.title} className="max-w-full h-auto" />
        </div>
      )}
      {project.link && (
        <div className="flex justify-center mt-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">
            View Project
          </a>
        </div>
      )}
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectDetail;