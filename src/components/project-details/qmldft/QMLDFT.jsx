import '../../../assets/index.css'; // Import the CSS file

const QMLDFT = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Quantum Computing and ML for DFT Calculations in Proteins</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Proposed a novel QC-ML hybrid model for accelerating DFT calculations in large molecular systems using a graph-CNN like model with a QCBM.
      </p>
      <div className="project-content mt-6">
        <h2 className="text-2xl font-bold text-base-content mt-4">Introduction</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to accelerate DFT calculations in large molecular systems using a novel QC-ML hybrid model.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Background</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">The Challenge of Scaling</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          In the early days of computing, the focus of atomistic computation was on studying simple model systems and small quantum mechanical (QM) systems. Researchers focused on things such as idealized crystals or small clusters of atoms to gain fundamental insights.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The first theoretical calculations in chemistry were those of Walter Heitler and Fritz London in 1927, where, for the first time ever, the bonding properties of H<sub>2</sub> were calculated based on QM considerations. However, the modeling of even medium-sized molecules within sophisticated QM methods involves significant compuatational effort, and large systems of practical interest are out of reach.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          An important benchmark for QM methods is to achieve so-called chemical accuracy--errors of approximately 1kcal/mol, which is the energy scale associated with thermal fluctuations at ambient temperatures.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">Calculating Electronic Density</h3>
        <p className='text-base-content text-opacity-70 mt-2'>
        At the heart of many chemical and physical properties lies the Schrödinger equation. This fundamental equation describes the quantum state of a system. However, there's a significant challenge: solving the Schrödinger equation becomes exponentially more difficult as the number of electrons in a system increases. This exponential scaling is a major bottleneck in computational chemistry, limiting our ability to study large, complex systems like proteins or advanced materials.
        </p>
        <p className='text-base-content text-opacity-70 mt-2'>
        Density Functional Theory (DFT) is a method used in quantum chemistry and physics to calculate the electronic structure of matter. Instead of solving the complex many-electron wavefunction, DFT simplifies the problem by focusing on the electron density, which is a function that describes the probability of finding electrons in different regions of space. DFT models can reduce this computational scaling to O(N<sup>3</sup>), justifying the practical success of this approach.
        </p>
        <p className='text-base-content text-opacity-70 mt-2'>
        If we can accurately calculate the electron density of a system, we unlock a load of information. From the density alone, we can derive numerous important properties without having to solve the full Schrödinger equation. But perhaps most excitingly, accurate electron densities can lead us to arguably the most important factor in determining a drug's effectiveness: precise calculations of binding affinities between drugs and proteins.
        </p>
        <p className='text-base-content text-opacity-70 mt-2'>
        In essence, electron density serves as a computational shortcut. Instead of wrestling with the full complexity of the Schrödinger equation for every calculation, we can focus on obtaining accurate densities and then derive other properties from there.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">Molecular Dynamics Simulation</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        Modeling of dynamical processes (chemical reactions, shocks, protein folding, and phase transitions in materials, to name a few) requires large-scale molecular dynamics (MD) simulations. And so, the question arises: can we find a more affordable approach? What if we disregard quantum mechanics entirely?
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
        One computational simplification is to neglect quantum mechanics entirely with the use of classical force fields, which approximate the system as a classical bead-spring model with additional terms for Coulomb and dispersion interactions. These models typically exhibit linear scaling, facilitating MD simulations of systems with millions or even billions of atoms. The major downside to this is that the bonding-oriented modeling approach limits their applicability to nonreactive conditions. Thus, they are not reliable for investigations of, for example, reaction pathways and transition states or generally dynamics far from a state of equilibrium. While the scalability of force fields is excellent, their accuracy and transferability are severely constrained.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The project successfully demonstrated the potential of QC-ML hybrid models in accelerating DFT calculations. Future work includes further optimization and testing.
        </p>
      </div>
      <div className="bottom-space"></div> {}
    </div>
  );
};

export default QMLDFT;