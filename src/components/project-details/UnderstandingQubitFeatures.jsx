import '../../assets/index.css'; // Import the CSS file

const UnderstandingQubitFeatures = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Understanding the Influence of Qubit Features on Error Rates</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        The goal of the project was to assess correlations between qubit features and ultimately predict error probability.
      </p>
      <div className="italic-section text-center mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
          This is the first of two semesters of a solo research project conducted by me under the guidance of Dr. Nicholas LaRacuente (<a href="mailto:nlaracu@iu.edu" className="text-blue-500">nlaracu@iu.edu</a>) during the fall 2023 semester. Link to the source code and how to run it can be found <a href="https://github.com/AuroraArc/qubit-feature-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 text-left mx-auto max-w-screen-lg">
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