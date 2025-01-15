import { useEffect, useState } from 'react';
import '../assets/index.css'; // Import the CSS file

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`fade-in h-screen bg-base-300`}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-4 lg:p-10 min-h-full">
          <h1 className="text-2xl font-bold text-base-content">Projects</h1>
          <p className="text-base-content text-opacity-70">
            Here are some of my projects...
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;