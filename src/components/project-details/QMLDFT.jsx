import '.../assets/index.css'; // Import the CSS file

const QMLDFT = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Quantum Computing and ML for DFT Calculations in Proteins</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Proposed a novel QC-ML hybrid model for accelerating DFT calculations in large molecular systems using a graph-CNN like model with a QCBM.
      </p>
      <div className="flex justify-center mt-4">
        <img src="https://lh3.googleusercontent.com/1xoO5BAUUU8kLns4myMNnKw6RRQyUk1JdlWL1M0aDiagMgaBeDA9O8Y4rYFAo9hfnzmb0cnUMrT_-cStBqnyp_zW59F5Edwbvxcy3EVmfeKS-PNgVw=w1072-h603-n-nu-rw" alt="Quantum Computing and ML for DFT Calculations in Proteins" className="max-w-full h-auto" />
      </div>
      <div className="project-content mt-6">
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to accelerate DFT calculations in large molecular systems using a novel QC-ML hybrid model.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Details</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project uses a graph-CNN like model with a QCBM to achieve this goal. The methodologies and technologies used are detailed here.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project successfully demonstrated the potential of QC-ML hybrid models in accelerating DFT calculations. Future work includes further optimization and testing.
        </p>
      </div>
    </div>
  );
};

export default QMLDFT;