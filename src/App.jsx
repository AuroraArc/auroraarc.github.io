import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitProfile from './components/GitProfile';
import config from '../gitprofile.config';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Header theme={config.themeConfig.defaultTheme} />
      <Routes>
        <Route path="/" element={<GitProfile config={config} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
