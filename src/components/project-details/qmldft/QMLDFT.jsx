import '../../../assets/index.css'; // Import the CSS file
import errorvscost from './errorvscost.png';
import dft from './dft.png';
import md from './md.png';
import errorvscostml from './errorvscostml.png';
import ldgcnn from './ldgcnn.png';
import qcbm from './qcbm.png';
import papers from './papers.png';

const QMLDFT = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Quantum Computing and ML for DFT Calculations in Proteins</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Proposed a novel QC-ML hybrid model for accelerating DFT calculations in large molecular systems using a graph-CNN like model with a QCBM.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
            The first half is a symposium presentation I gave on the topic of my research and the surrounding background regarding quantum chemistry and its computational challenges. The second half is a more detailed explanation of the architecture I proposed and the reasons behind it.
        </p>
      </div>
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
        <figure className="text-center">
          <img src={errorvscost} alt="errorvscost" className="mx-auto my-4" style={{ width: '400px', height: '320px '}} />
          <figcaption className="text-base-content text-opacity-70 mt-2">
            Figure 1: Error vs. Cost.
            Kulichenko, Maksim, et al. “The rise of neural networks for materials and Chemical Dynamics.” The Journal of Physical Chemistry Letters, vol. 12, no. 26, 1 July 2021, pp. 6227–6243.
          </figcaption>
        </figure>
        <h3 className="text-xl font-bold text-base-content mt-4">Calculating Electronic Density</h3>
        <p className='text-base-content text-opacity-70 mt-2'>
        At the heart of many chemical and physical properties lies the Schrödinger equation. This fundamental equation describes the quantum state of a system. However, there's a significant challenge: solving the Schrödinger equation becomes exponentially more difficult as the number of electrons in a system increases. This exponential scaling is a major bottleneck in computational chemistry, limiting our ability to study large, complex systems like proteins or advanced materials.
        </p>
        <figure className="text-center">
          <img src={dft} alt="dft" className="mx-auto my-4" style={{ width: '400px', height: '250px '}} />
          <figcaption className="text-base-content text-opacity-70 mt-2">
          Figure 2: Density functional theory (DFT) abandons the many-particle electron reality in favor of electron density.
          Lusk, Mark T., and Ann E. Mattsson. “High-Performance Computing for Materials Design to Advance Energy Science.” MRS Bulletin 36.3 (2011): 169–174.
          </figcaption>
        </figure>
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
        <figure className="text-center">
          <img src={md} alt="md" className="mx-auto my-4" style={{ width: '400px', height: '300px '}} />
          <figcaption className="text-base-content text-opacity-70 mt-2">
          Figure 3: Modeling of a polymeric molecule as a multi-bead spring-chain.
          Rüttgers, A., and M. Griebel. “Multiscale simulation of polymeric fluids using the sparse grid combination technique.” Applied Mathematics and Computation, vol. 319, Feb. 2018, pp. 425–443.
          </figcaption>
        </figure>
        <p className="text-base-content text-opacity-70 mt-2">
        One computational simplification is to neglect quantum mechanics entirely with the use of classical force fields, which approximate the system as a classical bead-spring model with additional terms for Coulomb and dispersion interactions. These models typically exhibit linear scaling, facilitating MD simulations of systems with millions or even billions of atoms. The major downside to this is that the bonding-oriented modeling approach limits their applicability to nonreactive conditions. Thus, they are not reliable for investigations of, for example, reaction pathways and transition states or generally dynamics far from a state of equilibrium. While the scalability of force fields is excellent, their accuracy and transferability are severely constrained.
        </p>
        <h3 className="text-2xl font-bold text-base-content mt-4">ML: The Solution?</h3>
        <figure className="text-center">
          <img src={errorvscostml} alt="errorvscostml" className="mx-auto my-4" style={{ width: '400px', height: '320px '}} />
          <figcaption className="text-base-content text-opacity-70 mt-2">
          Figure 4: Error vs. Cost.
          Kulichenko, Maksim, et al. “The rise of neural networks for materials and Chemical Dynamics.” The Journal of Physical Chemistry Letters, vol. 12, no. 26, 1 July 2021, pp. 6227–6243.
          </figcaption>
        </figure>
        <p className="text-base-content text-opacity-70 mt-2">
        One of the most exciting developments we've made is the integration of machine learning (ML) and deep learning (DL) techniques. ML-based potentials attempt to bridge the gap between highly accurate quantum mechanics simulations and hte affordable, but less transferrable, classical force field approaches.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Models can fall into two categories: non-parametric and parametric.
        </p>
        <ul className="text-base-content text-opacity-70 mt-2 list-disc ml-6">
          <li>A good example of a non-parametric model is a kernel-based approach. The designer of the model specifies a kernel function that serves as a measure of similarity between two inputs (e.g., two local atomic environments). The greater this similarity measure, the closer the model outputs are expected to be. The downside to non-parametric modeling is that it can become computationally expensive for large datasets as model complexity grows with dataset size.</li>
          <li>Alternatively, it can be advantageous to assume some fixed, or parametric, functional form for the model, typically with a large number of fitting parameters.</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          A large area of research is the design of good descriptors (feature vectors) that highlight the most important chemical features in an input data point. With very carefully designed descriptors, relatively simple models, such as linear regression, can achieve very high accuracies.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Neural networks are highly flexible, nonlinear functions with thousands to millions of parameters that are optimized to fit a dataset. A large number of parameters provides many degrees of freedom, allowing an optimization algorithm to decide the best mapping that transforms the input into an estimation of a desired property.
        </p>
        <h2 className="text-xl font-bold text-base-content mt-4">Model Proposal</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          The model I propose integrates quantum computing with a graph convolutional neural network (CNN)-like model. First and foremost, this model leverages the power of both quantum and classical computing. By integrating these two paradigms, we're ale to tackle the complex problem of electronic density calculations in a way that hasn't been done before. The quantum component allows us to capture intricate quantum interactions, while the classical neural network provides robust learning capabilities. We believe our approach has the potential to overcome some of the limitations of current density calculation methods.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          A key feature of our model is its use of point clouds to represent atomic structures. Point clouds offer us a flexible geometric representation that's particularly well-suited for atomic data. Imagine each atom as a point in 3D space, with additional features like atomic number or charge. This representation allows us to handle a wide variety of molecular geometries and sizes with ease. First, point clouds are sparse and unstructured, which means they can efficiently represent the inherently sparse nature of atomic structures. This sparsity translates to lower computational costs compared to volumetric representations, which is crucial when dealing with large molecular systems. Moreover, the unordered nature of point clouds aligns perfectly with the quantum nature of electron distributions. We can choose to interpolate the original point cloud into a finer resolution adaptively. Electrons don't have a fixed order around an atom, and point clouds allow us to capture this fundamental characteristic.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">PointNet++ & LDGCNN</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          There are two key adaptations that form the backbone of our approach.
        </p>
        <p className="text-center">
          <img src={papers} alt="papers" className="mx-auto my-4" style={{ width: '700px', height: '300px '}} />
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          PointNet++ introduced a hierarchical feature learning approach that has proven incredibly effective for point cloud processing. The key insight here is the ability to capture fine-grained patterns and features at different scales. In the context of our work, this hierarchical approach is crucial. It allows us to capture both local atomic interactions and broader molecular structures. Imagine zooming in to see individual atom-electron interactions, then zooming out to understand how these interactions affect the overall molecular structure. Next, we have Dynamic Graph CNN. The standout feature here is its EdgeConv module. This module constructs a local neighborhood graph and applies convolution-like operations on the edges connecting neighboring pairs of points.
        </p>
        <figure className="text-center">
          <img src={ldgcnn} alt="LDGCNN" className="mx-auto my-4" style={{ width: '500px', height: '250px '}} />
          <figcaption className="text-base-content text-opacity-70 mt-2">
          Figure 7: LDGCNN architecture.
          Zhang, Kuangen, et al. "Linked dynamic graph cnn: Learning through point cloud by linking hierarchical features." 2021 27th international conference on mechatronics and machine vision in practice (M2VIP). IEEE, 2021.
          </figcaption>
        </figure>
        <p className="text-base-content text-opacity-70 mt-2">
          This is the original architecture of the LDGCNN as it was designed for object classification tasks.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The proposed model follows a similar structure; however, since we have a regression task, we must modify the overall pipeline slightly by instead adapting the segmentation portion of the original architecture, and from there, modify the output. We can change the end layer of the MLP to a fully-connected layer to output continuous values for density in a fully-classical case or replace the MLP entirely with a Quantum Circuit Born Machine (QCBM) to output a density distribution.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">Quantum Circuit Born Machine</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        <figure className="text-center">
          <img src={qcbm} alt="qcbm" className="mx-auto my-4" style={{ width: '700px', height: '400px '}} />
          <figcaption className="text-base-content text-opacity-70 mt-2">
          Figure 6: A visualization of the QCBM algorithm and generalization evaluation scheme.
          Gili, Kaitlin, et al. "Do quantum circuit born machines generalize?." Quantum Science and Technology 8.3 (2023): 035021.
          </figcaption>
        </figure>
          A QCBM is a type of quantum machine learning model that uses quantum circuit to generate and represent probability distribution. This model comes from the Born rule in quantum mechanics, which states that the probability of measuring a particular outcome in a quantum system is given by the square of the amplitude of the corresponding quantum state. In the context of a QCBM, the output probabilities of measurements are derived from this rule.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          We have a parametrized quantum circuit, meaning it has adjustable parameters that can be tuned to fit specific data ro distribution characteristics. The parameters of the quantum circuit are optimized during a training process to minimize the difference between the quantum-generated probability distribution and a target distribution (e.g., a dataset of a known distribution). A cost function measures how well the quantum circuit's output matches the target distribution.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          In the context of this project, we want to utilize a QCBM to generate an electronic density distribution on an input dataset.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The project successfully demonstrated the potential of QC-ML hybrid models in accelerating DFT calculations. Future work includes further optimization and testing.
        </p>
        <h2 className="text-xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>Qi, Charles Ruizhongtai, et al. "Pointnet++: Deep hierarchical feature learning on point sets in a metric space." Advances in neural information processing systems 30 (2017). <a href="https://doi.org/10.48550/arXiv.1706.02413" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.48550/arXiv.1706.02413</a></p>
          <p>Zhang, Kuangen, et al. "Linked dynamic graph cnn: Learning through point cloud by linking hierarchical features." 2021 27th international conference on mechatronics and machine vision in practice (M2VIP). IEEE, 2021. <a href="https://doi.org/10.48550/arXiv.1904.10014" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://doi.org/10.48550/arXiv.1904.10014</a></p>
        </div>
      </div>
      <div className="bottom-space"></div> {}
    </div>
  );
};

export default QMLDFT;