import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitProfile from './components/GitProfile';
import config from '../gitprofile.config';
import Header from './components/Header';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Header theme={config.themeConfig.defaultTheme} />
      <Routes>
        <Route path="/" element={<GitProfile config={config} />} />
        <Route path="/projects" element={<Projects />} />
        {config.externalProjects.map((project, index) => (
          <Route
            key={index}
            path={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            element={<ProjectDetail />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;