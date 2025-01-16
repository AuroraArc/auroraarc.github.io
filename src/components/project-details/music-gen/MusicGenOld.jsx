import '../../../assets/index.css'; // Import the CSS file

const MusicGenOld = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Music Generation Using GGA</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Implementing a music generation model using Genetic Algorithm (GGA) for evolving music sequences.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
            Unfortunately, I seemed to have lost the original code for this project. It was connected to an old school GitHub and I have forgotten the password to it.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Abstract</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to implement a music generation model using Genetic Algorithm (GGA) for evolving music sequences. The model is trained on a dataset of MIDI files and generates new music sequences through evolutionary processes.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          Music generation using Genetic Algorithms (GGA) involves evolving music sequences through processes inspired by natural selection. This approach allows for the creation of unique and diverse music sequences.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Data Collection</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The dataset used for this project consists of MIDI files collected from various sources. The MIDI files are preprocessed to extract note sequences and other relevant features.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Model Architecture</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The model architecture is based on Genetic Algorithms (GGA), which involve evolving music sequences through selection, crossover, and mutation processes. The fitness function evaluates the quality of the generated music sequences.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Results</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Model Performance</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The model was evaluated on a test set of MIDI files. The generated music sequences were evaluated based on their coherence and musicality. The model achieved a high level of performance, generating music sequences that were coherent and musically pleasing.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Discussion</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Implications for Music Generation</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The results of this project demonstrate the potential of Genetic Algorithms for music generation. The model is able to generate unique and diverse music sequences through evolutionary processes.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Future Work</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Future work includes further optimization of the model and exploring other evolutionary algorithms for music generation. Additionally, incorporating user feedback into the music generation process could improve the quality of the generated music.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project successfully implemented a music generation model using Genetic Algorithms. The model was able to generate unique and diverse music sequences through evolutionary processes. Future work includes further optimization and exploring other evolutionary algorithms for music generation.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>[1] Mitchell, Melanie. "An introduction to genetic algorithms." MIT press, 1998.</p>
          <p>[2] Biles, John A. "GenJam: A genetic algorithm for generating jazz solos." Proceedings of the International Computer Music Conference. 1994.</p>
        </div>
      </div>
      <div className="bottom-space"></div> {/* Add this div */}
    </div>
  );
};

export default MusicGenOld;