import '../../assets/index.css'; // Import the CSS file

const Recidivism = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Breaking the Cycle: Reducing Recidivism in Iowa State Prisons</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Analysis of the recidivism cycle and the impact of various factors on recidivism rates.
      </p>
      <div className="project-content mt-6">
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to analyze the recidivism cycle and the impact of various factors on recidivism rates.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Details</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project involves analyzing data from Iowa State Prisons to identify factors that influence recidivism rates. The methodologies and technologies used are detailed here.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project provided valuable insights into the factors influencing recidivism rates. Future work includes further analysis and policy recommendations.
        </p>
      </div>
      <div className="bottom-space"></div> {}
    </div>
  );
};

export default Recidivism;