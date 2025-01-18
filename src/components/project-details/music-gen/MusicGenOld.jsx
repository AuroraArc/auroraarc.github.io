import '../../../assets/index.css'; // Import the CSS file

const MusicGenOld = () => {
  return (
    <div className="fade-in h-screen bg-base-100 p-4 lg:p-10">
      <h1 className="text-3xl font-bold text-base-content text-center mt-4">Music Generation Using GGAs (OLD)</h1>
      <p className="text-base-content text-opacity-70 text-center mt-2">
        Implementing a music generation model using Genetic Algorithm (GGA) for evolving music sequences.
      </p>
      <div className="italic-section mx-auto max-w-screen-lg">
        <p className="text-base-content text-opacity-50 mt-2 italic opacity">
            This is an old project that eventually transitioned into the Performer-based model I am currently working on. Unfortunately, I seemed to have lost the original code for this project. It was connected to an old university-affiliated GitHub account and I have forgotten the password to it.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-300" />
      <div className="project-content mt-6 mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-base-content mt-4">Abstract</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project aims to generate musical compositions using genetic programming. It utilizes the DEAP (Distributed Evolutionary Algorithms in Python) library to implement genetic algorithms for music generation. We take a dataset of .abc files and convert them into a format that can be used by the genetic algorithm, and in this case, we used the data structures found within the .abc notation. We first train an initial genetic algorithm to generate a series of compositions ranging from random notes to sequences resembling those in the dataset. Using this newly generated dataset, we then train a GRU (gated recurrent unit) on these newly generated compositions to serve as the objective function for a secondary genetic algorithm to generate compositions. The final compositions are then evaluated by the GRU model to determine the fitness value of each generation.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Problem Space</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">Objectives</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        This project aims to generate original musical compositions using genetic programming. The primary objective is to develop an evaluation framework capable of determining the quality of generated compositions based on a set of predefined rules embedded in the initial genetic algorithm. A GRU (Gated Recurrent Unit) model serves as the objective function, learning patterns from a given dataset and guiding the genetic algorithm toward producing musically coherent outputs.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The system is designed to analyze music of any kind, train the GRU model to capture its stylistic patterns, and then use this trained model to evaluate new compositions. By assigning fitness values to each generation based on their adherence to learned patterns, the framework aims to evolve compositions that are both original and stylistically similar to the input dataset. Ultimately, the goal is to create a system capable of producing unique compositions that resonate with the characteristics of the training data.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">Rules</h3>
        <p className="text-base-content text-opacity-70 mt-2">
        This project does not rely on formal music theory for evaluating compositions. Instead, rules are defined within the fitness function of the initial genetic algorithm and influenced by the output of the GRU model. The fitness evaluation function, adapted from a similar study [1], compares each generated composition to those in the initial dataset. Here is the pseudocode for the fitness function:
        </p>
        <pre className="p-4 rounded-md overflow-auto">
          <code className="text-sm text-gray-800">
            {
              `
              def fitness():
                n_i = len(generated_composition)
                m = len(initial_dataset)
                total_score = 0
                for song in initial_dataset:
                    n_2 = same_sequence_2(generated_composition, song)
                    n_3 = same_sequence_3(generated_composition, song)
                    n_4 = same_sequence_4(generated_composition, song)
                    score = (n_2 + 10 * n_3 + 100 * n_4) / (n_i * m)
                    total_score += score
                return total_score / m,`
            }
          </code>
        </pre>
        <p className="text-base-content text-opacity-70 mt-2">
          Here:
        </p>
        <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
          <li><strong>n_2, n_3, and n_4</strong> represent the counts of matching 2-note, 3-note, and 4-note sequences between the generated composition and a song in the initial dataset.</li>
          <li>sequences are weighted based on their rarity, with longer sequences contributing higher scores.</li>
          <li>The fitness function calculates the average score of the generated composition across all songs in the dataset, rewarding similarity to complex patterns in the data.</li>
        </ul>
        <h3 className="text-xl font-bold text-base-content mt-4">Constraints</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Several constraints affect the project's scope and outcomes:
        </p>
        <ol className="text-base-content text-opacity-70 mt-2 list-disc ml-6">
          <li><strong>Dataset Size and Complexity:</strong>
            <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
              <li> The diversity of generated compositions is limited by the dataset size and the complexity of the initial compositions.</li>
              <li>The genetic algorithm optimizes for compositions resembling the dataset, inherently constraining complexity and variety.</li>
            </ul>
          </li>
          <li><strong>Instrumental and Vocal Diversity:</strong>
            <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
              <li>The system currently lacks the ability to generate compositions for multiple instruments or voices, limiting its versatility.</li>
            </ul>
          </li>
          <li><strong>GRU Model Training:</strong>
            <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
              <li>Training the GRU model to effectively capture and replicate patterns in the dataset is computationally expensive.</li>
              <li>Inadequate training may lead to generated compositions that fail to reflect the stylistic elements of the input data.</li>
            </ul>
          </li>
          <li><strong>Evaluation Limitations:</strong>
            <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
              <li>While the GRU model improves evaluation accuracy compared to the initial fitness function, its effectiveness depends on its ability to generalize patterns from the training dataset.</li>
            </ul>
          </li>
        </ol>
        <h3 className="text-xl font-bold text-base-content mt-4">Challenges</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          A key challenge in this project is accurately defining and capturing the elements of musical patterns we aim to learn from the melodies. Unlike previous works, our approach attempts to process and learn from a significantly larger and more complex dataset. Below are some of the notable challenges and distinctions compared to the primary paper our work is based on:
        </p>
        <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
          <li><strong>Dual-Voice Compositions:</strong> The dataset includes compositions with two distinct voices—a treble line and a bass line—introducing the need to manage interactions between the voices and their harmonies.</li>
          <li><strong>Inclusion of Diverse Musical Elements:</strong> Beyond notes, the dataset incorporates rests, chords, and other musical features. This added complexity requires the system to account for a wider range of musical components, significantly increasing the difficulty of both training and evaluation.</li>
          <li><strong>Longer Melodies:</strong> The compositions in our dataset are substantially longer than those analyzed in related studies, challenging the system's ability to efficiently process, learn, and generate music at a comparable scale.</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          These factors collectively make this project more complex than previous attempts, requiring innovative approaches to manage the additional data and ensure the generated compositions maintain musical coherence while reflecting the diverse characteristics of the input dataset.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">Variations</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          This project initially focuses on generating classical music, specifically Mozart sonatas, due to their complexity and single-instrument structure. Expanding the system to handle compositions for multiple instruments would enable the evaluation and generation of music across different genres, broadening the project's scope and applicability.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Various evolutionary strategies can be explored to enhance the quality of generated compositions. In this project, I employed mutation, crossover, and elitism.
        </p>
        <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
          <li><strong>Mutation</strong> introduces randomness, fostering creativity and originality in the compositions.</li>
          <li><strong>Crossover</strong> combines features from parent compositions to produce diverse offspring.</li>
          <li><strong>Elitism</strong> ensures that the best compositions from each generation are retained, driving continuous improvement.</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          Exploring alternative strategies, such as tournament selection or fitness-proportionate selection, could provide insights into their effects on composition quality.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          Different objective functions can also be tested to evaluate their impact on composition quality. In this project, a GRU (Gated Recurrent Unit) model was used as the primary objective function, as it effectively evaluates the fitness of each generation. Other potential options include:
        </p>
        <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
          <li><strong>LSTM (Long Short-Term Memory):</strong> Another neural network architecture suitable for capturing temporal dependencies in music.</li>
          <li><strong>Simple Fitness Evaluation Function:</strong> A rule-based approach that compares generated compositions to the initial dataset, as demonstrated in the pseudocode earlier.</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          Testing these variations could provide a better understanding of their influence on the evolution and creativity of the compositions.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Algorithms</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Genetic Algorithm</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          A genetic algorithm is a search heuristic inspired by the principles of natural selection, using processes like selection, crossover, and mutation to optimize solutions over successive generations.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Initial population:</strong><br />The process begins with an initial population of compositions, serving as the first generation. In this project, the initial genetic algorithm is a specialized case, functioning more as an optimization function than a fully independent genetic algorithm. This is because the ultimate goal is to produce compositions closely resembling those in the dataset we aim to learn from.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Fitness Evaluation:</strong><br />Each individual in the population is evaluated using a fitness function, represented by the GRU model. The fitness value quantifies the quality of a composition based on patterns and characteristics deemed "good" by the GRU.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Selection (Elitism):</strong><br />The highest-performing compositions, as determined by their fitness values, are retained for the next generation through elitism. This ensures that the best solutions persist across iterations.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Crossover:</strong><br />Some compositions are randomly selected for crossover, where two parent compositions combine to produce offspring. The resulting compositions inherit characteristics from both parents, promoting diversity and creativity.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Mutation:</strong><br />A subset of compositions undergoes mutation, where small random changes are introduced. This process introduces variability, helping the algorithm explore new possibilities and avoid stagnation.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Iteration and Convergence:</strong><br />This cycle of evaluation, selection, crossover, and mutation repeats until the generated compositions achieve sufficiently high fitness values as determined by the GRU model. The result is a set of optimized compositions that align closely with the patterns and qualities of the target dataset.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. GRU Model</h3>
        <p className="text-base-content text-opacity-70 mt-2">
         A GRU (Gated Recurrent Unit) model is a type of neural network within the family of recurrent neural networks (RNNs). RNNs are specifically designed to process sequential data, making them well-suited for tasks like music generation, where music can be represented as a sequence of notes over time.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Advantages of RNNs and GRUs:</strong><br />Unlike traditional feedforward neural networks, RNNs have loops that enable them to retain information across time steps, mimicking the human ability to recall past information. However, traditional RNNs often suffer from the <strong>vanishing gradient problem</strong>, where gradients diminish during backpropagation, hindering the learning of long-term dependencies.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          The GRU model addresses this limitation by incorporating a <strong>gating mechanism</strong> that determines what information should be kept or discarded. This mechanism consists of:
        </p>
        <ul className="list-disc list-inside text-base-content text-opacity-70 mt-2">
          <li><strong>Reset Gate:</strong> Controls how much of the past information is forgotten.</li>
          <li><strong>Update Gate:</strong> Determines how much of the current input information is retained.</li>
        </ul>
        <p className="text-base-content text-opacity-70 mt-2">
          These gates allow GRUs to efficiently learn long-term dependencies in sequential data, making them more robust and effective for tasks involving complex patterns over time.
        </p>
        <p className="text-base-content text-opacity-70 mt-2">
          <strong>Application in Music Generation:</strong><br />In this project, the GRU model is not used to generate music directly. Instead, it serves as the <strong>fitness evaluator</strong> for the genetic algorithm. The GRU analyzes each generation of compositions, assessing their alignment with the learned patterns and characteristics of the dataset. By doing so, the GRU provides a fitness score that guides the genetic algorithm in selecting, mutating, and crossing over compositions to create improved generations.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Methods</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Data Collection</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The dataset used for this project consists of MIDI files collected from various sources. The MIDI files are preprocessed to extract note sequences and other relevant features.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Model Architecture</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The model architecture is based on Genetic Algorithms (GGA), which involve evolving music sequences through selection, crossover, and mutation processes. The fitness function evaluates the quality of the generated music sequences.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Results</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Model Performance</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The model was evaluated on a test set of MIDI files. The generated music sequences were evaluated based on their coherence and musicality. The model achieved a high level of performance, generating music sequences that were coherent and musically pleasing.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Discussion</h2>
        <h3 className="text-xl font-bold text-base-content mt-4">1. Implications for Music Generation</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          The results of this project demonstrate the potential of Genetic Algorithms for music generation. The model is able to generate unique and diverse music sequences through evolutionary processes.
        </p>
        <h3 className="text-xl font-bold text-base-content mt-4">2. Future Work</h3>
        <p className="text-base-content text-opacity-70 mt-2">
          Future work includes further optimization of the model and exploring other evolutionary algorithms for music generation. Additionally, incorporating user feedback into the music generation process could improve the quality of the generated music.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">Conclusion</h2>
        <p className="text-base-content text-opacity-70 mt-2">
          This project successfully implemented a music generation model using Genetic Algorithms. The model was able to generate unique and diverse music sequences through evolutionary processes. Future work includes further optimization and exploring other evolutionary algorithms for music generation.
        </p>
        <h2 className="text-2xl font-bold text-base-content mt-4">References</h2>
        <div className="text-base-content text-opacity-70 mt-2">
          <p>[1] Mitchell, Melanie. "An introduction to genetic algorithms." MIT press, 1998.</p>
          <p>[2] Biles, John A. "GenJam: A genetic algorithm for generating jazz solos." Proceedings of the International Computer Music Conference. 1994.</p>
        </div>
      </div>
      <div className="bottom-space"></div>
    </div>
  );
};

export default MusicGenOld;