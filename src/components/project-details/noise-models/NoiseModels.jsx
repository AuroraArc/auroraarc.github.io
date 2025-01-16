import '../../../assets/index.css'; // Import the CSS file
import { InlineMath, BlockMath } from 'react-katex'; // Import KaTeX components
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import graph1 from './graph1.png';
import graph2 from './graph2.png';
import featureMap from './featureMap.png';
import ansatz from './ansatz.png';

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
            What is quantum noise? Quantum noise refers to the fluctuations quantum systems have that arise due to disturbances that can affect the behavior and properties qubits have. Common types of noise include:
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
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Classical Training</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          To begin, we need a classical model to compare the quantum model to. Using scikit-learn's SVC [2], we can train the classifier ona well-known dataset: the Iris dataset [3]. This dataset includes 150 samples of iris flowers, with 50 samples from each of the three species: setosa, versicolor, and virginica. 
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Quantum Preprocessing</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          To be able to train a quantum model using Qiskit's VQC [4], we must first take the calssical data and transofmr it into a format that can be represented by qubits using a feature map. In this example, the <em>ZZFeatureMap</em> is shown, which applies a Hadamard gate to each qubit, followed by a series of controlled-Z gates that create entanglement between the qubits.
        </p>
        <p className="text-center">
            <img src={featureMap} alt="Feature Map" className="mx-auto my-4" style={{ width: '500px', height: '300px' }} />
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
            After the data has been transformed, we need to apply an ansatz, which is analogous to the neural layers in a classical neural network. The ansatz is a series of quantum gates that are applied to the qubits to perform computations. In this example, the <em>EfficientSU2</em> ansatz is used, which is a parameterized circuit that can be optimized to minimize the loss function. It consists of a series of single-qubit rotation about the Y and Z axes and controlled-Z gates.
        </p>
        <p className="text-center">
            <img src={ansatz} alt="Ansatz" className="mx-auto my-4" style={{ width: '500px', height: '300px' }} />
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
            Finally, we ned to choose an optimization algorithm to use. I chose the Nakanishi-Fujii-Todo (NFT) [5] algorithm, which has these key features:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
            <li>Divides optimization problem into solvable subproblems by considering subset of parameters</li>
            <li>Hyperparameter-free, which means no tuning</li>
            <li>Designed to cnoerge faster than other optimization algorithms</li>
        </ul>
        <h3 className="text-xl font-bold text-base-content mt-4">3. Designing Noise Models</h3>
        <p className="text-base-content text-opacity-70 mt-2">
            Using artificial noise models, we can pinpoint what sort of gates can actually improve the accuracy of the model.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
            There are a few noise models to consider:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
            <li>noiseless</li>
            <li>bit-flip</li>
            <li>amplitude damping</li>
            <li>depolarizing</li>
            <li>readout</li>
            <li>amplitude damping and depolarizing</li>
            <li>multi-qubit gates only (CX and ECR)</li>
            <li>some combination of all</li>
        </ul>
        <h2 className="text-2xl font-bold text-base-content mt-4">Results</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">Amplitude Damping Noise Model</h3>
        <p className="text-base-content text-opacity-70 mt-2">
            Initial results suggests that a small amount of amplitude damping noise might actually increase the performance of a quantum machine learning algorithm, but we have yet to evaluate potential statistical significance.
        </p>
        <p className="text-center">
          <img src={graph1} alt="Graph 1" className="mx-auto my-4" style={{ width: '500px', height: '300px' }} />
        </p>
        <p className="text-center">
            <img src={graph2} alt="Graph 2" className="mx-auto my-4" style={{ width: '500px', height: '300px' }} />
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          As expected, the empirical data shows that hight levels of noise ultimately reduce performance, with an increasing downward slope as error probability increases, signifying a significant decrease in performance. However, it is interesting to note that around 2% error probability, the performance of the model experiences a slight increase before decreasing again.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Discussion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The slight increase discovered in the amplitude damping model is an interesting oberservation, as it suggests that a small amount of noise may actually be beneficial for quantum models. However, more research is needed to determine the statistical significance of this finding. The model could just be overfitting to the noise or simply just randomness.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Limitations</h3>
        <p className="text-base-content text-opacity-70 mt-2">
            The VQC used in this project were only tested on very simple noise models. Current real backends experience a much more complex set of noise. Additionally, the experiments were not run on a live quantum device; rather, they were run on a simulator. This means that the results may not be representative of what would happen on a real quantum device.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Future Work</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Future work includes analyzing the slight bump in score performance and determining the optimal balance that maximizes performance while minimizing complexity when creating a noise model. Additionally, the experiments should be run on a real quantum device to see how the results differ from the simulator.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
            Creating a more complex noise model that better represents the noise experienced by real quantum devices would also be beneficial. This would provide a more accurate representation of how quantum models perform in real-world scenarios.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          In conclusion, the impact of noise on quantum models is a significant factor that can affect the accuracy and performance of quantum machine learning algorithms. Hopefully this project has provided some insights into how noise can impact quantum models and how it can be used to improve performance.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>[1] McDonnell, Mark D, and Derek Abbott. “What is stochastic resonance? Definitions, misconceptions, debates, and its relevance to biology.” PLoS computational biology vol. 5,5 (2009): e1000348. <a href="https://doi.org/10.1371/journal.pcbi.1000348" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.1371/journal.pcbi.1000348</a></p>
          <p>[2] scikit-learn documentation. Version 1.4.2. <a href="https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html</a></p>
          <p>[3] Qiskit Machine Learning. Version 0.7.2 <a href="https://qiskit-community.github.io/qiskit-machine-learning/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://qiskit-community.github.io/qiskit-machine-learning/</a></p>
          <p>[4] Qiskit documentation. Version Version 1.0.2 <a href="https://docs.quantum.ibm.com/api/qiskit" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://docs.quantum.ibm.com/api/qiskit</a></p>
          <p>[5] Nakanishi, Ken M., Keisuke Fujii, and Synge Todo. "Sequential minimal optimization for quantum-classical hybrid algorithms." Physical Review Research 2.4 (2020): 043158. <a href="https://doi.org/10.1103/PhysRevResearch.2.043158" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.1103/PhysRevResearch.2.043158</a></p>
          <p>[6] Huang, Chenyi, and Shibin Zhang. ‘Enhancing Adversarial Robustness of Quantum Neural Networks by Adding Noise Layers’. New Journal of Physics, vol. 25, no. 8, IOP Publishing, Aug. 2023, p. 083019, <a href="https://doi.org/10.1088/1367-2630/ace8b4" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.1088/1367-2630/ace8b4</a></p>
        </div>
      </div>
      <div className="bottom-space"></div> {/* Add this div */}
    </div>
  );
};

export default NoiseModels;