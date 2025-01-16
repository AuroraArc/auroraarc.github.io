import '../../assets/index.css'; // Import the CSS file

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
        <h2 className="text-2xl font-bold text-base-content mt-4">Details</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project involves analyzing various qubit features and their impact on error rates. The methodologies and technologies used are detailed here.
        </p>
      </div>
      <div className="bottom-space"></div> {}
    </div>
  );
};

export default UnderstandingQubitFeatures;