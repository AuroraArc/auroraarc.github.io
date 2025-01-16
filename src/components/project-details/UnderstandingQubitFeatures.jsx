import '../assets/index.css'; // Import the CSS file

const UnderstandingQubitFeatures = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Understanding the Influence of Qubit Features on Error Rates</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        The goal of the project was to assess correlations between qubit features and ultimately predict error probability.
      </p>
      <div className="flex justify-center mt-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bloch_sphere.svg" alt="Understanding the Influence of Qubit Features on Error Rates" className="max-w-full h-auto" />
      </div>
      <div className="project-content mt-6">
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to assess correlations between qubit features and predict error probability.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Details</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project involves analyzing various qubit features and their impact on error rates. The methodologies and technologies used are detailed here.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project provided valuable insights into the influence of qubit features on error rates. Future work includes further analysis and testing.
        </p>
      </div>
    </div>
  );
};

export default UnderstandingQubitFeatures;