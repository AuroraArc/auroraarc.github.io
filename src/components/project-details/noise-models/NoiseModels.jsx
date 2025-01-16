import '../../../assets/index.css'; // Import the CSS file
import { InlineMath, BlockMath } from 'react-katex'; // Import KaTeX components
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
// import noiseImpact from './noiseImpact.png'; // Import the image
// import noiseGraph from './noiseGraph.png'; // Import the image

const NoiseModels = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Analysis of Noise on Quantum Models</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        The goal was to analyze the impact of noise on the accuracy of quantum models using quantum classifiers and noise models.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
          This is the second of two semesters of a solo research project conducted by me under the guidance of Dr. Nicholas LaRacuente (<a href="mailto:nlaracu@iu.edu" className="text-blue-500">nlaracu@iu.edu</a>) during the spring 2024 semester. Link to the source code and how to run it can be found <a href="https://github.com/AuroraArc/noise-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Abstract</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          placeholder
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          Quantum computing offers an exponential speedup for certain tasks when compared to classical computing. However, it has many limitations that inhibit it to perform to its theoretical power. One major aspect is the impact of noise on quantum models, which degrades performance and accuracy.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
            What is quantum noise? Quantum noise referes to the fluctuations quantum systems have that arise due to disturbances that can affect the behavior and properties qubits have. Common types of noise include:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
            <li><strong>Environmental Noise</strong>: Includes thermal fluctuations or local radiation from cell phones</li>
            <li><strong>Gate errors</strong>: The most simple example would be a bit-flip error, where a qubit flips from 0 to 1 or vice versa</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
            Noise leads to decoherence, which is when a qubit loses its ability to hold quantum information. This is a major issue in quantum computing, as it can lead to errors in calculations and reduce the accuracy of quantum models.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
            So, what about adding noise to quantum models? While this seems counterintuitive, this is an actual phenomenon called <em>stochastic resonance</em> [1,6], where the addition of random noise actually enhances a system's response to weak signals or inputs. Think of it being analogous to the classical form of regularization, where random noise helps prevent overfitting and improves generalization.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to quantify the impact of these noise sources on the performance of quantum classifiers.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Noise Models</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Various noise models were applied to simulate the impact of noise on quantum classifiers. These models include depolarizing noise, amplitude damping, and phase damping [2].
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Quantum Classifiers</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Quantum classifiers were implemented using the Qiskit framework [3]. The classifiers were trained and tested under different noise conditions to evaluate their performance.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Results</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Impact of Noise on Accuracy</h3>
        <p className="text-center">
          {/* <img src={noiseImpact} alt="Impact of Noise on Accuracy" className="mx-auto my-4" style={{ width: '500px', height: '300px' }} /> */}
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The results show that noise significantly impacts the accuracy of quantum classifiers. Depolarizing noise had the most severe effect, followed by amplitude damping and phase damping.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Noise Analysis Graph</h3>
        <p className="text-center">
          {/* <img src={noiseGraph} alt="Noise Analysis Graph" className="mx-auto my-4" style={{ width: '500px', height: '300px' }} /> */}
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The graph illustrates the relationship between noise levels and classifier performance. As noise levels increase, the performance of the classifiers deteriorates.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Discussion</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Implications of Noise on Quantum Computing</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The analysis highlights the need for effective noise mitigation strategies in quantum computing. Understanding the impact of different noise models can help in designing robust quantum algorithms and error correction techniques.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Future Work</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Future work includes exploring advanced noise mitigation techniques and testing the models on larger quantum systems. Additionally, integrating machine learning approaches to predict and compensate for noise effects can be a promising direction.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          In conclusion, this project provides valuable insights into the impact of noise on quantum models. The findings emphasize the importance of noise mitigation in achieving reliable quantum computations.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>[1] Preskill, John. “Quantum Computing in the NISQ Era and Beyond.” Quantum, vol. 2, Aug. 2018, p.79. Crossref, <a href="https://doi.org/10.22331/q-2018-08-06-79" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.22331/q-2018-08-06-79</a>.</p>
          <p>[2] Nielsen, Michael A., and Isaac L. Chuang. “Quantum Computation and Quantum Information.” Cambridge University Press, 2010.</p>
          <p>[3] Qiskit documentation. Version 0.45.0 <a href="https://docs.quantum.ibm.com/api/qiskit" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://docs.quantum.ibm.com/api/qiskit</a></p>
        </div>
      </div>
      <div className="bottom-space"></div> {/* Add this div */}
    </div>
  );
};

export default NoiseModels;