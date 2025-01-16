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
          This project was conducted under the guidance of Dr. Nicholas LaRacuente (<a href="mailto:nlaracu@iu.edu" className="text-blue-500">nlaracu@iu.edu</a>) during the spring 2024 semester. Link to the source code and how to run it can be found <a href="https://github.com/AuroraArc/music-gen" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Abstract</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to implement a music generation model using Performer, a transformer-based model that uses the FAVOR+ algorithm for efficient attention computation. The model is trained on a dataset of MIDI files and generates new music sequences.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          Music generation is a challenging task that involves creating new music sequences that are coherent and musically pleasing. Transformer models have shown great promise in this area, but they are computationally expensive. Performer is a transformer-based model that uses the FAVOR+ algorithm to reduce the computational complexity of attention mechanisms.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Data Collection</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The dataset used for this project consists of MIDI files collected from various sources. The MIDI files are preprocessed to extract note sequences and other relevant features.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Model Architecture</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The model architecture is based on Performer, a transformer-based model that uses the FAVOR+ algorithm for efficient attention computation. The model consists of multiple layers of self-attention and feed-forward neural networks.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Results</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Model Performance</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The model was evaluated on a test set of MIDI files. The generated music sequences were evaluated based on their coherence and musicality. The model achieved a high level of performance, generating music sequences that were coherent and musically pleasing.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Discussion</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Implications for Music Generation</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The results of this project demonstrate the potential of Performer for music generation. The model is able to generate high-quality music sequences while reducing the computational complexity of attention mechanisms.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Future Work</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Future work includes further optimization of the model and exploring other transformer-based architectures for music generation. Additionally, incorporating user feedback into the music generation process could improve the quality of the generated music.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project successfully implemented a music generation model using Performer. The model was able to generate high-quality music sequences while reducing the computational complexity of attention mechanisms. Future work includes further optimization and exploring other transformer-based architectures for music generation.
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