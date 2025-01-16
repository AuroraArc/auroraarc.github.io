import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import GitProfile from './components/GitProfile';
import config from '../gitprofile.config';
import Header from './components/Header';
import Projects from './components/Projects';
import QMLDFT from './components/project-details/qmldft/QMLDFT';
import MusicGen from './components/project-details/music-gen/MusicGen';
import MusicGenOld from './components/project-details/music-gen/MusicGenOld';
import NoiseModels from './components/project-details/noise-models/NoiseModels';
import UnderstandingQubitFeatures from './components/project-details/qubit-features/UnderstandingQubitFeatures';
import Recidivism from './components/project-details/recidivism/Recidivism';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header theme={config.themeConfig.defaultTheme} />
      <Routes>
        <Route path="/" element={<GitProfile config={config} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/quantum-computing-and-ml-for-dft-calculations-in-proteins" element={<QMLDFT />} />
        <Route path="/projects/music-generation-using-performer" element={<MusicGen />} />
        <Route path="/projects/music-generation-using-gga" element={<MusicGenOld />} />
        <Route path="/projects/analysis-of-noise-on-quantum-models" element={<NoiseModels />} />
        <Route path="/projects/understanding-the-influence-of-qubit-features-on-error-rates" element={<UnderstandingQubitFeatures />} />
        <Route path="/projects/breaking-the-cycle:-reducing-recidivism-in-iowa-state-prisons" element={<Recidivism />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;