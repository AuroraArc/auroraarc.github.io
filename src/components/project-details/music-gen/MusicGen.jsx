import { Link } from 'react-router-dom';
import '../../../assets/index.css'; // Import the CSS file

const MusicGen = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Music Generation Using Performer</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Implementing a music generation model using Performer, a transformer-based model that uses the FAVOR+ algorithm for efficient attention computation.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
          The current code is slightly outdated and is broken at the moment. There is an older version of the project that instead used a genetic algorithm with a GRU-based model for music generation. This can be viewed <Link to="/projects/music-generation-using-ggas-(old)" className="text-blue-500 underline">here</Link>.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Abstract</h2>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Data Collection</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Model Architecture</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Results</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Model Performance</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Discussion</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Implications for Music Generation</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Future Work</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>[1] Choromanski, Krzysztof, et al. "Rethinking attention with performers." arXiv preprint arXiv:2009.14794 (2020).</p>
          <p>[2] Vaswani, Ashish, et al. "Attention is all you need." Advances in neural information processing systems 30 (2017).</p>
        </div>
      </div>
      <div className="bottom-space"></div> {/* Add this div */}
    </div>
  );
};

export default MusicGen;