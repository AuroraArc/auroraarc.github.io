import '../../assets/index.css'; // Import the CSS file
// import Latex from 'react-latex-next'; // Import the Latex component

const UnderstandingQubitFeatures = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Understanding the Influence of Qubit Features on Error Rates</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        The goal of the project was to assess correlations between qubit features and ultimately predict error probability.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
          This is the first of two semesters of a solo research project conducted by me under the guidance of Dr. Nicholas LaRacuente (<a href="mailto:nlaracu@iu.edu" className="text-blue-500">nlaracu@iu.edu</a>) during the fall 2023 semester. Link to the source code and how to run it can be found <a href="https://github.com/AuroraArc/qubit-feature-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Abstract</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The goal of this project is to assess correlations between qubit features and ultimately predict error probability. In the context of quantum computing, quantum bits (qubits) serve as the fundamental units for information processing, comparable to classical bits in conventional computers that store and process data using 1s and 0s. Quantum gates, analogous to classical logic gates such as NOT and OR, are employed to manipulate qubit states. The project involved the application of time series analysis to examine 7-qubit systems, notably 'ibm_perth', over a span of 315 days. Additionally, normal regression analysis was conducted for 127-qubit systems over a one-day period, instead treating each individual qubit as a data point, encompassing seven unique systems. Evaluation of prediction accuracy was carried out using root mean square error (RMSE) and R-squared (R2), common regression techniques. The results indicate a limited predictive capability of qubit features in relation to error rates when employing linear and low-order polynomials. Notably, a stronger correlation was noted across qubits compared to across time. Future exploration involves investigating the discrepancy between the correlation matrix and the error coefficients, and a comprehensive understanding of the relationship between qubit features and error rates may enhance error mitigation when integrated with existing models.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          First, what is a quantum computer [1]? To put it simply, it is a computer that uses quantum bits (qubits) to process information. Two notable features of a quantum computer allow it to be much more powerful than a classical computer:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li><strong>Superposition</strong> allows the qubit to be in a state of one and zero simultaneously</li>
          <li><strong>Entanglement</strong> "binds" a group of qubits together; their individual states are dependent on each other, no matter how far they are from each other</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          There are a few challenges that hinder quantum computing performance [2, 3]:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li>It is extremely susceptible to noise, which can be anything from ambient temperature to local radiation from Wi-Fi</li>
          <li>Scalability issues—the largest processor was just unveiled by IBM (as of December 2023): the 1,121-qubit Condor processor</li>
          <li>Relatively new field—in 1998, the first 2-qubit computer was built</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          In quantum computing, errors can arise from various sources, including decoherence, environmental factors, and human error on qubit maintenance. These errors pose a significant challenge to the reliability and accuracy of quantum computers. There are many examples of methods that try to solve, or mitigate, error, such as noise intermediate-scale quantum (NISQ) devices, quantum algorithm optimization, and error correction codes.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Predicting gate error probability in the context of quantum computing involves estimating the likelihood of errors occurring during quantum gate operations. Some reasons why this is important in quantum computing include:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li>Error correction strategies—understanding and predicting errors are essential for quantum error correction strategies as they rely on accurate estimates of error probabilities to detect and correct errors effectively</li>
          <li>Hardware benchmarks—predicting quantum error probability aids in developing effective calibration protocols; this is mostly what this project is focused on</li>
        </ul>
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Data Collection</h3>
        <h4 className="text-lg font-bold text-base-content mt-4">1.1 Qsikit SDK and IBM Machines</h4>
        <p className="text-base-content text-opacity-70 mt-2">
          For data collection, I utilized the Qiskit SDK [4], which provided access to IBM quantum computers.
        </p>
        <h4 className="text-lg font-bold text-base-content mt-4">1.2 Quantum Processors and Data Length</h4>
        <p className="text-base-content text-opacity-70 mt-2">
          One 7-qubit processor and seven 127-qubit processors were utilized:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li>'ibm_perth': a 7-qubit system based on the Falcon processor, with 315 days of data</li>
          <li>'ibm_brisbane', 'ibm_cusco', 'ibm_kawasaki', 'ibm_kyoto', 'ibm_nazca', 'ibm_quebec', 'ibm_sherbrooke': 127-qubit systems based on the Eagle processor, with one day of data for each system compiled into one dataset</li>
        </ul>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Preprocessing</h3>
        <h4 className="text-lg font-bold text-base-content mt-4">2.1 Qubit Features</h4>
        <p className="text-base-content text-opacity-70 mt-2">
          The following qubit features were considered [5]:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li>decoherence time (T1 and T2)</li>
          <li>frequency, anharmonicity</li>
          <li>readout assignment error ('prob meas0 prop1' and 'prob meas1 prop0'), readout length</li>
          <li>gate time</li>
          <li>ID, rz, sx, Pauli-X (NOT gate), reset, √x gate errors</li>
          <li>controlled NOT (CNOT) gate error (exclusive to 7-qubit)</li>
          <li>ECR gate error (exclusive to 127-qubit)</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          All features were scaled to have a standard deviation of 1.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">3. Time Series Analysis of CNOT Gate Error on 'ibm_perth'</h3>
        <h4 className="text-lg font-bold text-base-content mt-4">3.1 LASSO Regression</h4>
        <p className="text-base-content text-opacity-70 mt-2">
          LASSO Regression was employed for its simplicity and feature selection capabilities [6].
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <Latex>
            {`$$\\min_{w} { \\frac{1}{2n_{\\text{samples}}} ||w - y||_2 ^ 2 + \\alpha ||w||_1}$$`}
          </Latex>
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li>$n_{samples}$: number of samples</li>
          <li>$X$: input features (independent variables)</li>
          <li>$y$: target value (in this case, CNOT error)</li>
          <li>$w$: coefficient vector</li>
          <li>$a||w||_1$: LASSO regularization</li>
        </ul>
        <h4 className="text-lg font-bold text-base-content mt-4">3.2 Polynomial Regression</h4>
        <p className="text-base-content text-opacity-70 mt-2">
          Polynomial regression (quadratic order) was applied to capture nonlinear relationships [6].
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Five-fold cross-validation was conducted using a traditional 80-20 split:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2">
          <li>The dataset was divided into five subsets of approximately equal size.</li>
          <li>The model was trained on 80% (or 4/5 of the folds) and then tested on the remaining 20% (or the remaining fold).</li>
          <li>This process was repeated five times with different training and testing combinations.</li>
        </ul>
        <h3 className="text-xl font-bold text-base-content mt-4">4. ECR Gate Error Prediction for 127-Qubit Systems</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Linear and polynomial LASSO regression were employed again with five-fold cross-validation. Instead of time, predictions for one random 'ECR gate error' value were made across different qubits of all system.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>[1] “What Is Quantum Computing?” Caltech Science Exchange, <a href="https://scienceexchange.caltech.edu/topics/quantum-science-explained/quantum-computing-computers" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://scienceexchange.caltech.edu/topics/quantum-science-explained/quantum-computing-computers</a>. Accessed 6 Dec. 2023.</p>
          <p>[2] Preskill, John. “Quantum Computing in the NISQ Era and Beyond.” Quantum, vol. 2, Aug. 2018, p.79. Crossref, <a href="https://doi.org/10.22331/q-2018-08-06-79" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.22331/q-2018-08-06-79</a>.</p>
          <p>[3] Engdahl, Sylvia. “Noise in Quantum Computing.” Amazon, Greenhaven Press/Gale, 2008, <a href="https://aws.amazon.com/blogs/quantum-computing/noise-in-quantum-computing/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://aws.amazon.com/blogs/quantum-computing/noise-in-quantum-computing/</a></p>
          <p>[4] Qiskit documentation. Version 0.45.0 <a href="https://docs.quantum.ibm.com/api/qiskit" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://docs.quantum.ibm.com/api/qiskit</a></p>
          <p>[5] B. Baheri, Q. Guan, V. Chaudhary and A. Li, "Quantum Noise in the Flow of Time: A Temporal Study of the Noise in Quantum Computers," 2022 IEEE 28th International Symposium on On-Line Testing and Robust System Design (IOLTS), Torino, Italy, 2022, pp. 1-5, doi: <a href="https://doi.org/10.1109/IOLTS56730.2022.9897404" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">10.1109/IOLTS56730.2022.9897404</a>.</p>
          <p>[6] scikit-learn documentation. Version 1.3.2. <a href="https://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares</a></p>
        </div>
      </div>
      <div className="bottom-space"></div> {/* Add this div */}
    </div>
  );
};

export default UnderstandingQubitFeatures;