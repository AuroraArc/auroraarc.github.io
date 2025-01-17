import '../../../assets/index.css'; // Import the CSS file

const Recidivism = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Breaking the Cycle: Reducing Recidivism in Iowa State Prisons</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Analysis of the recidivism cycle and the impact of various factors on recidivism rates.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
          Link to the published paper can be found <a href="https://www.soa.org/49c692/globalassets/assets/files/static-pages/research/arch/2023/arch-2023-2-breaking-the-cycle-reducing-recidivism.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Summary</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          In this paper, we address the persistent issue of repeat offenses in Iowa, where over one-third of released inmates return to prison within three years. This high recidivism rate not only affects offenders but also imposes substantial financial burdens on the state's citizens. Utilizing data from the Iowa Department of Corrections, we developed a feed-forward neural network to predict the likelihood of an inmate re-offending upon release. The model incorporated various parameters, including inmate-specific factors (age, gender, type of crime), prison conditions (e.g., overpopulation), and socio-economic indicators from the inmate's home county (such as median personal income). The model achieved an AUC-ROC score of 0.849, indicating a high level of accuracy. To assess the financial impact of recidivism, we estimated costs associated with different classifications of crimes, predicting that recidivism could cost Iowa over $348 million. This analysis included a heat map to identify the distribution of crimes by classification, highlighting areas with higher concentrations of specific felony classes.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Based on these findings, we formulated four major recommendations to reduce recidivism rates and associated costs:
        </p>
        <ul className="text-base-content text-opacity-70 mt-2 list-disc ml-6">
          <li>Address Prison Overpopulation: Given the significant correlation between prison overpopulation and recidivism rates, we propose that the Iowa Department of Justice increase its implementation of alternative correctional programs, such as probation and community service, and reduce the use of mandatory minimums and determinate sentencing in the Iowa state code.</li>
          <li>Enhance Drug and Behavioral Therapy: Implement comprehensive drug and behavioral therapy programs to address underlying issues contributing to criminal behavior.</li>
          <li>Expand Education and Counseling in Maximum Security Prisons: Provide more educational and counseling opportunities to equip inmates with skills and support for successful reintegration into society.</li>
          <li>Develop Post-Release Programs for At-Risk Inmates: Focus on creating support systems for inmates identified as high-risk for recidivism to facilitate their transition back into the community.</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          These recommendations aim to reduce recidivism rates and alleviate the financial and social costs associated with repeat offenses in Iowa.
        </p>
      </div>
      <div className="bottom-space"></div> {/* Add this div */}
    </div>
  );
};
export default Recidivism;