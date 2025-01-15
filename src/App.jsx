import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitProfile from './components/GitProfile';
import config from '../gitprofile.config';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GitProfile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
