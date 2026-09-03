export const projects = [
  {
    id: 11,
    slug: 'neural-decoding',
    title: 'Neural Decoding',
    excerpt:
      'Two UCLA studies on decoding intent from biosignals: a 10.2× faster brain-to-text speech decoder, and an architecture search for sEMG keystroke decoding.',
    thumbnail: '/assets/Projects/NeuralDecoding/Thumbnail.svg',
    thumbnailAlt:
      'Schematic of multi-channel biosignal traces feeding a CTC sequence decoder that outputs text',
    featured: true,
    category: 'Machine Learning',
    context: 'UCLA ECE C143A & C147A',
    collaborators: ['Jimmy Fang', 'Lauren Mirhan', 'Rose Wang'],
    techStack: ['PyTorch', 'GRU', 'BiLSTM', 'Transformers', 'CTC Loss', 'AMP', 'OneCycleLR', 'Weights & Biases'],
    highlights: [
      {
        label: 'Speech decoder — training',
        value: '10.2×',
        detail: 'Faster to reach sub-0.21 phoneme error rate: 6m 51s versus 1h 09m.',
      },
      {
        label: 'Speech decoder — accuracy',
        value: '17.18% PER',
        detail: 'Down from the 20.55% baseline — a 16.4% relative error reduction.',
      },
      {
        label: 'Speech decoder — size',
        value: '−38% params',
        detail: '35.2M parameters versus the baseline’s 56.7M, and it generalised better.',
      },
      {
        label: 'sEMG decoder — accuracy',
        value: '13.83% CER',
        detail: 'BiLSTM versus the 28.33% baseline: a 51.2% relative improvement.',
      },
      {
        label: 'sEMG decoder — electrodes',
        value: '4 of 16',
        detail: 'A sparse 4-channel model (25.87% CER) still beat the full 16-channel baseline.',
      },
      {
        label: 'Hardware used',
        value: 'RTX 4060',
        detail: 'All speech-decoding experiments ran on an 8GB consumer laptop GPU.',
      },
    ],
    pdfEmbeds: [
      {
        label: 'Optimizing Neural Speech Decoding on Consumer Hardware',
        description: 'ECE C143A',
        href: '/assets/Projects/NeuralDecoding/neural-speech-decoding-optimization.pdf',
      },
      {
        label: 'Architecture Search and Input Ablations for sEMG Keystroke Decoding',
        description: 'ECE C147A',
        href: '/assets/Projects/NeuralDecoding/semg-keystroke-decoding.pdf',
      },
    ],
    resourceLinks: [
      {
        label: 'Speech decoding paper (PDF)',
        href: '/assets/Projects/NeuralDecoding/neural-speech-decoding-optimization.pdf',
      },
      {
        label: 'sEMG keystroke paper (PDF)',
        href: '/assets/Projects/NeuralDecoding/semg-keystroke-decoding.pdf',
      },
    ],
    description: `
      <p>Two coursework research projects at UCLA, a term apart, that ended up asking the same
      question from opposite ends of the nervous system: <strong>how much decoding accuracy can you
      buy with better engineering rather than more compute?</strong> One decodes attempted speech
      from cortical recordings; the other decodes keystrokes from muscle activity in the forearm.
      Both are sequence problems trained with CTC loss, and both are written up as full papers you
      can read below.</p>

      <h3>Study one — Brain-to-text speech decoding</h3>
      <p>The Brain-to-Text Benchmark &rsquo;24 provides microelectrode-array recordings from the
      ventral premotor cortex of a participant with ALS attempting to speak sentences, together with
      a baseline 5-layer GRU trained with Connectionist Temporal Classification to emit phoneme
      sequences. The baseline lands around 20% phoneme error rate (PER) but is slow to train, which
      makes experimentation painful.</p>

      <p>Our constraint was deliberate: every experiment ran on an <strong>NVIDIA RTX 4060 Laptop GPU
      with 8GB of VRAM</strong>, paired with an Intel i9-13900H — not a cluster. That constraint drove
      the whole approach.</p>

      <h4>What we changed</h4>
      <ul>
        <li><strong>Mixed-precision training.</strong> PyTorch AMP with FP16 forward/backward passes,
        FP32 loss and optimizer state, and a dynamic <code>GradScaler</code> to avoid gradient
        underflow.</li>
        <li><strong>Data loading.</strong> Persistent workers, pinned memory, and prefetching so the
        GPU stops idling between batches.</li>
        <li><strong>Dynamic padding with alignment.</strong> Sequences padded to the nearest multiple
        of 64 timesteps rather than the batch maximum — less wasted computation, and dimensions that
        CUDA kernels like.</li>
        <li><strong>An architectural bottleneck.</strong> The baseline feeds 32 time bins × 256 neural
        features (8,192 dimensions) straight into the GRU. We inserted a learned projection down to
        1,024 dimensions — Linear → LayerNorm → GELU → dropout — and dropped from 5 GRU layers to 4.</li>
        <li><strong>Smaller refinements.</strong> An odd (19-wide) Gaussian smoothing kernel for
        symmetric padding, per-day adaptation layers consolidated into a single batched tensor
        contraction, and PyTorch&rsquo;s default GRU hidden-state initialisation.</li>
        <li><strong>AdamW + OneCycleLR</strong> with <code>pct_start=0.10</code>, and a peak learning
        rate lowered from 1e-3 to 3e-4 for long 10,000-step runs.</li>
      </ul>

      <h4>What happened</h4>
      <p>The architecture change was the single biggest win — around 38% less training time and a 6.2%
      PER improvement on its own — which told us the baseline was simply overparameterised for
      8,800 training sentences. Total parameters fell from 56.7M to 35.2M, memory headroom let batch
      size grow from 32 to 128, and time-to-target collapsed.</p>

      <div class="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Configuration</th><th>&lt; 0.30 PER</th><th>&lt; 0.25 PER</th><th>&lt; 0.21 PER</th></tr>
          </thead>
          <tbody>
            <tr><td>Baseline (BS 32)</td><td>15m 39s</td><td>28m 39s</td><td>1h 09m</td></tr>
            <tr><td>Optimized (BS 32)</td><td>3m 17s</td><td>6m 31s</td><td>not reached*</td></tr>
            <tr><td>Optimized (BS 64)</td><td>2m 05s</td><td>4m 22s</td><td>8m 13s</td></tr>
            <tr><td><strong>Optimized (BS 128)</strong></td><td><strong>2m 01s</strong></td><td><strong>3m 57s</strong></td><td><strong>6m 51s — 10.2×</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p><em>*Did not converge below 0.21 PER inside the 10-minute test window.</em></p>

      <p>Over a full 10,000-step run the optimized model reached <strong>17.18% PER against the
      baseline&rsquo;s 20.55%</strong> — a 16.4% relative error reduction — and got there in 42 minutes
      instead of 74, with 38% fewer parameters. For reference, the competition&rsquo;s first-place
      entry (DCoND) reached 15.34% PER using context-aware diphone representations plus ensembling;
      ours is a single model reached through training and architecture work alone.</p>

      <h3>Study two — sEMG keystroke decoding</h3>
      <p>The second project used the <code>emg2qwerty</code> single-subject task: surface EMG recorded
      at 2 kHz across 16 forearm electrodes, converted to spectrograms (33 frequency bins per channel,
      528 input features), and decoded into typed characters over 4-second windows. Every architecture
      shared the same time-depth-separable convolutional front end, so only the sequence encoder
      varied — a controlled comparison rather than a leaderboard chase.</p>

      <h4>Architecture comparison</h4>
      <div class="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Model</th><th>Val CER</th><th>Test CER</th><th>vs. baseline</th></tr>
          </thead>
          <tbody>
            <tr><td>Baseline (TDS-Conv)</td><td>32.48%</td><td>28.33%</td><td>—</td></tr>
            <tr><td>GRU</td><td>17.77%</td><td>18.56%</td><td>+34.5%</td></tr>
            <tr><td><strong>BiLSTM</strong></td><td><strong>15.53%</strong></td><td><strong>13.83%</strong></td><td><strong>+51.2%</strong></td></tr>
            <tr><td>Transformer</td><td>18.19%</td><td>20.89%</td><td>+26.3%</td></tr>
            <tr><td>Conv + Transformer (Adam)</td><td>14.02%</td><td>30.21%</td><td>−6.6%</td></tr>
            <tr><td>Conv + Transformer (AdamW + OneCycleLR)</td><td>15.77%</td><td>28.70%</td><td>−1.3%</td></tr>
          </tbody>
        </table>
      </div>

      <p>Recurrent models won clearly. Both Conv+Transformer variants overfit hard — training loss
      near zero by epoch five while validation CER oscillated between 20% and 35% — and swapping Adam
      for AdamW + OneCycleLR changed how fast they converged but not where they landed. The problem
      was capacity against data volume, not the optimizer.</p>

      <h4>Ablations</h4>
      <ul>
        <li><strong>Electrode count.</strong> CER fell monotonically with more channels — 25.87% (4
        ch) → 19.69% (6 ch) → 16.51% (8 ch) → 13.83% (16 ch) — with diminishing returns after six.
        The striking result: the 4-channel model still beat the 16-channel baseline, so the
        baseline&rsquo;s weakness was training, not input richness.</li>
        <li><strong>Sampling rate.</strong> 125 Hz gave the best test CER (13.83%). Both 62.5 Hz
        (14.88%) and 250 Hz (15.02%) had better <em>validation</em> CER but worse test CER — the
        signature of overfitting.</li>
        <li><strong>Data volume.</strong> Test CER degraded from 13.83% at full data to 15.95%
        (75%), 19.58% (50%), and 27.02% (25%) — a practical read on how much calibration typing a
        user would actually have to do.</li>
      </ul>

      <h3>What I took from it</h3>
      <p>Both studies landed on the same conclusion from different directions: in small-data
      biosignal regimes, the model that generalises is usually the smaller one, and careful
      engineering of the training pipeline buys more than extra capacity does. The speech decoder got
      better <em>because</em> we shrank it; the keystroke decoder&rsquo;s transformers lost to a
      two-layer BiLSTM for the same reason.</p>

      <p>Both papers are explicit about their limits. The speech study tuned on the validation set and
      never submitted to the official test server, and looked only at GRUs. The sEMG study used a
      single subject, one random seed, and fixed hyperparameters across ablations, so differences
      under roughly 1–2 CER points shouldn&rsquo;t be over-read.</p>
    `,
  },
  {
    id: 7,
    slug: 'airwave',
    title: 'AirWave',
    excerpt: 'A multimodal gesture, voice, and face-tracking interface for hands-free system control.',
    thumbnail: '/assets/Projects/AirWave/airwave-thumbnail.png',
    thumbnailAlt: 'AirWave project title card',
    featured: true,
    githubUrl: 'https://github.com/CrazyDog559/AirWave',
    date: '2026',
    category: 'Human-Computer Interaction',
    techStack: ['Computer Vision', 'Voice Recognition', 'Gesture Control', 'System Integration'],
    youtubeVideoId: '764s4DPYQZg',
    galleryImages: [
      '/assets/Projects/AirWave/airwave-data.png',
      '/assets/Projects/AirWave/airwave-data-2.png',
    ],
    galleryAlts: [
      'AirWave evaluation results chart from the final report',
      'Second AirWave evaluation results chart from the final report',
    ],
    resourceLinks: [
      {
        label: 'Final Report',
        href: '/assets/Projects/AirWave/airwave-final-report.pdf',
      },
      {
        label: 'Presentation',
        href: '/assets/Projects/AirWave/airwave-presentation.pdf',
      },
    ],
    description: `
      <p>AirWave is a multimodal human-computer interaction project that combines gesture recognition,
      voice commands, face tracking, and system integration into a single hands-free interface.</p>

      <h3>Project Overview</h3>
      <p>The system was designed to make interaction more natural and accessible by supporting multiple
      input modes. Gesture input handles direct physical control, voice commands provide quick verbal
      interaction, and face tracking enables adaptive responses during use.</p>

      <h3>Evaluation Highlights</h3>
      <ul>
        <li>Gesture recognition accuracy reached 85% to 95% across test runs</li>
        <li>Voice command accuracy improved from 80% in quiet conditions to 90% after refinement</li>
        <li>System integration latency stayed under one second end to end in all trials</li>
        <li>Face tracking and volume-control features were validated across repeated test sessions</li>
      </ul>

      <h3>Why It Matters</h3>
      <p>AirWave explores how multiple input methods can work together to create a more flexible and
      intuitive control surface for real-world applications. The project demonstrates both technical
      integration and practical user experience design.</p>
    `,
  },
  {
    id: 1,
    slug: 'nas',
    title: 'Building a NAS',
    excerpt: 'A home NAS built from spare parts, running RAID 5 for reliable network storage.',
    thumbnail: '/assets/Projects/NAS/thumbnail-1280.jpg',
    thumbnailAlt: 'The finished home NAS build with its drive bays exposed',
    featured: true,
    youtubeId: 'bdis5gb_cj8',
    date: 'December 2025',
    category: 'Hardware & Embedded',
    techStack: ['Hardware', 'Networking', 'Storage'],
    description: `
      <p>This project showcases the complete process of building a custom Network Attached Storage (NAS) system.
      A NAS provides centralized storage accessible to multiple devices on a home network, perfect for media streaming,
      file backups, and collaborative work.</p>

      <h3>Project Overview</h3>
      <p>The goal was to create a cost-effective, reliable storage solution that could handle multiple simultaneous
      connections while providing redundancy and data protection.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Multi-bay drive configuration for storage expansion</li>
        <li>RAID configuration for data redundancy</li>
        <li>Network optimization for fast file transfers</li>
        <li>Remote access capabilities</li>
      </ul>

      <h3>Challenges & Solutions</h3>
      <p>One of the main challenges was balancing performance with power consumption. The solution involved
      selecting energy-efficient components and implementing smart power management features.</p>

      <h3>Results</h3>
      <p>The finished NAS provides reliable storage with excellent performance for streaming and file sharing
      across the home network. Watch the video above for the complete build process and setup guide.</p>
    `,
  },
  {
    id: 8,
    slug: 'phlebotomy',
    title: 'Phlebotomy Practice App',
    excerpt: 'A full-stack study app for the phlebotomy certification exam, with backend and payments.',
    thumbnail: '/assets/Projects/Phlebotomy/Thumbnail.svg',
    thumbnailAlt:
      'Illustration of a practice-question card beside a row of colour-coded blood collection tubes',
    featured: true,
    liveUrl: 'https://phlebotomy.vercel.app/',
    date: '2026',
    category: 'Web Development',
    techStack: ['React', 'Supabase', 'Stripe', 'Vercel'],
    description: `
      <p>Built to help me study for the NHA phlebotomy certification exam, and to learn how to ship a
      complete website with a real backend and payments end to end.</p>

      <h3>Project Overview</h3>
      <p>The app quizzes users on phlebotomy exam material while doubling as a hands-on exercise in
      shipping production infrastructure: authentication, a Postgres backend via Supabase, and paid
      access via Stripe, all deployed on Vercel.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Practice questions modeled after the NHA phlebotomy certification exam</li>
        <li>Supabase-backed data storage and auth</li>
        <li>Stripe integration for paid access</li>
        <li>Deployed and hosted on Vercel</li>
      </ul>
    `,
  },
  {
    id: 10,
    slug: 'openclaw',
    title: 'OpenClaw',
    excerpt: 'An LLM-assisted automation agent running on a Mac mini with root-level system access.',
    thumbnail: '/assets/Projects/OpenClaw/Thumbnail.svg',
    thumbnailAlt:
      'Illustration of a terminal session wired to scheduled automation tasks running on a Mac mini',
    featured: true,
    date: '2026',
    category: 'Automation',
    techStack: ['macOS', 'LLM APIs', 'Scripting'],
    description: `
      <p>Configured OpenClaw/ClawdBot on a Mac mini to enable an LLM-assisted automation agent with
      root-level permissions for executing local workflows and system tasks such as daily texts and
      stock updates, reducing manual effort by 50%.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Modular command/tool setup to trigger repeatable automations</li>
        <li>Uses APIs and LLM tokens to drive local workflows</li>
        <li>Automates recurring tasks like daily texts and stock updates</li>
      </ul>
    `,
  },
  {
    id: 9,
    slug: 'bruincast',
    title: 'BruinCast',
    excerpt: 'A site built while working in UCLA IT\'s BruinCast AV Operations role.',
    thumbnail: '/assets/Projects/BruinCast/Thumbnail.svg',
    thumbnailAlt:
      'Schematic of a PTZ classroom camera feeding a capture node that fans out to monitoring endpoints',
    featured: true,
    liveUrl: 'https://bruin-cast.vercel.app/',
    date: '2026',
    category: 'Web Development',
    techStack: ['React', 'Vercel'],
    description: `
      <p>Created while working in UCLA IT's BruinCast AV Operations role, supporting the classroom
      recording and monitoring workflows that team relies on day to day.</p>
    `,
  },
  {
    id: 2,
    slug: 'projectrender',
    title: 'ProjectRender',
    excerpt: 'A community initiative collecting donated computer parts to build systems for those in need.',
    thumbnail: '/assets/Projects/ProjectRender/logo-900.png',
    thumbnailAlt: 'ProjectRender logo',
    category: 'Community',
    techStack: ['Hardware', 'Community Service', 'PC Building'],
    description: `
      <p>ProjectRender is a passion project focused on making technology accessible to everyone. By collecting
      donated computer parts and components, I build complete systems for individuals who need them but may not
      have the resources to purchase new equipment.</p>

      <h3>Mission</h3>
      <p>The goal of ProjectRender is to bridge the digital divide by providing functional computers to students,
      job seekers, and anyone who needs access to technology. Every build is carefully assembled and tested to
      ensure reliability and performance.</p>

      <h3>The Process</h3>
      <ul>
        <li>Collecting donated parts from individuals and organizations</li>
        <li>Testing and refurbishing components</li>
        <li>Building custom systems tailored to recipients' needs</li>
        <li>Installing necessary software and providing setup guidance</li>
        <li>Documenting builds on YouTube to inspire others</li>
      </ul>

      <h3>Community Impact</h3>
      <p>Each computer built represents an opportunity for someone to learn, work, or connect with others.
      The project has grown into a community effort, with donors and recipients sharing their stories and
      spreading awareness about technology accessibility.</p>

      <h3>Follow the Journey</h3>
      <p>Check out the YouTube channel below to see build videos, tutorials, and stories from the people
      who have benefited from ProjectRender.</p>
    `,
    youtubeChannel: 'projectrender9925',
    youtubeChannelBanner: '/assets/Projects/ProjectRender/banner-1600.jpg',
    instagramPosts: [
      'CcKHc_tuGKW',
      'CcI6Raqptey',
      'CV6upHZlNO6',
      'CSit0_cLu94',
      'CRHtUMnnfzg',
      'CPyogUsH5CV',
      'CO3b5oUHfK5',
      'COBdN6nn8D1',
      'CL-3Rpan2cR',
      'CJhIQ9BHaYz',
      'CItzumFnAIO',
      'CIMiorSnA7D',
      'CGvmv9Lnw3z',
      'CFxqpPBnhJ7',
      'CFlWW8enPGb',
      'CEzv7vUHbXs',
      'CExv4R7nojO',
      'CEH4r0KnhpB',
      'CDmOSg4n1gS',
      'CDmOCfCnQiE',
      'CBoSppeH0yv',
      'CAqV9wFHmn_',
      'B97kMB1na3I',
      'B68-aq5nibS',
      'B6wQ3XDn6ZP',
    ],
  },
  {
    id: 3,
    slug: 'fridayz',
    title: 'Fridayz',
    excerpt: 'A social media app where you blog your week and share it with friends every Friday.',
    thumbnail: '/assets/Projects/Fridayz/thumbnail-1280.png',
    thumbnailAlt: 'Fridayz app branding and interface preview',
    youtubeId: 'xmGmCFdgV5w',
    githubUrl: 'https://github.com/eric-248/Fridayz',
    date: '2024',
    category: 'Web Development',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    description: `
      <p>Fridayz is an innovative social media platform that reimagines how we share our weekly experiences.
      Instead of constant updates throughout the week, users document their experiences privately and share
      them all at once every Friday, creating a weekly ritual of reflection and connection.</p>

      <h3>Concept</h3>
      <p>The app encourages users to blog about their week's highlights, challenges, and moments worth sharing.
      When Friday arrives, all posts are automatically shared with friends, creating an exciting weekly reveal
      where everyone catches up on each other's lives simultaneously.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Private weekly blogging that posts automatically on Fridays</li>
        <li>Rich media support for photos and text entries</li>
        <li>Friend connections to share weekly updates</li>
        <li>Timeline view to browse friends' weekly stories</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>

      <h3>Technical Implementation</h3>
      <p>Built with the MERN stack (MongoDB, Express, React, Node.js), Fridayz features a RESTful API backend
      with JWT authentication, real-time post scheduling, and a modern React frontend with responsive design.
      The MongoDB database efficiently stores user profiles, posts, and social connections.</p>

      <h3>Development Journey</h3>
      <p>This project was a collaborative effort that involved designing a unique user experience around
      scheduled posting, implementing secure authentication, and creating an intuitive interface for weekly
      blogging. Watch the demo video above to see Fridayz in action!</p>
    `,
  },
  {
    id: 4,
    slug: 'aquarium-simulator',
    title: 'Aquarium Simulator',
    excerpt: 'An interactive 3D aquarium simulation built with Unity and C#.',
    thumbnail: '/assets/Projects/Aquarium-Simulator/thumbnail-1280.jpg',
    thumbnailAlt: 'Rendered scene from the Unity aquarium simulator',
    youtubeVideos: ['fOsEJ3QPEok', 'tKXgUTMV018'],
    githubUrl: 'https://github.com/CrazyDog559/Aquarium-Simulator',
    date: '2024',
    category: 'Game Development',
    techStack: ['Unity', 'C#', '3D Graphics', 'Game Design'],
    description: `
      <p>Aquarium Simulator is an immersive 3D aquarium experience built in Unity, allowing users to create
      and manage their own virtual aquarium ecosystem. The project combines realistic fish behaviors, dynamic
      lighting, and interactive controls to deliver an engaging simulation.</p>

      <h3>Project Overview</h3>
      <p>This simulation recreates the experience of maintaining an aquarium, complete with swimming fish,
      aquatic plants, and environmental controls. Players can customize their tank, add different species,
      and watch as their underwater world comes to life.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Realistic fish AI with flocking and swimming behaviors</li>
        <li>Interactive camera controls for exploring the aquarium</li>
        <li>Dynamic lighting and water effects</li>
        <li>Multiple fish species with unique behaviors</li>
        <li>Customizable tank environments and decorations</li>
        <li>Performance-optimized rendering for smooth gameplay</li>
      </ul>

      <h3>Technical Highlights</h3>
      <p>Developed in Unity using C#, the project features custom fish AI systems, procedural animation,
      and shader programming for water effects. The simulation uses Unity's physics engine for realistic
      movement and collision detection, while optimized rendering techniques ensure smooth performance
      even with multiple fish in the scene.</p>

      <h3>Development Process</h3>
      <p>Building the Aquarium Simulator involved implementing AI behaviors for fish movement, creating
      visually appealing water shaders, and designing an intuitive user interface. Watch the videos above
      to see the aquarium in action and learn about the development process!</p>
    `,
  },
  {
    id: 5,
    slug: 'simon',
    title: 'Simon IoT Game',
    excerpt: 'An IoT-based motion detection game inspired by the classic Simon memory game.',
    thumbnail: '/assets/Projects/Simon/thumbnail-1280.jpg',
    thumbnailAlt: 'The Simon IoT game hardware setup',
    youtubeId: '_tNlj_9OsvQ',
    date: '2022',
    category: 'Hardware & Embedded',
    techStack: ['IoT', 'Motion Detection', 'Arduino', 'Hardware'],
    description: `
      <p>The Simon IoT Game reimagines the classic Simon memory game using motion detection technology.
      Instead of pressing colored buttons, players must replicate specific movements detected by IoT sensors,
      creating an engaging physical and interactive gaming experience.</p>

      <h3>Concept</h3>
      <p>This project combines the nostalgia of the Simon memory game with modern IoT technology. The system
      displays a sequence of movements, and players must accurately replicate each motion to progress through
      increasingly challenging levels.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Motion detection using IoT sensors</li>
        <li>Real-time movement recognition and validation</li>
        <li>Progressive difficulty with longer sequences</li>
        <li>Visual and audio feedback for correct/incorrect movements</li>
        <li>Score tracking and level progression</li>
        <li>Physical interaction instead of traditional button presses</li>
      </ul>

      <h3>Technical Implementation</h3>
      <p>Built using Arduino and motion sensors, the project processes sensor data in real-time to detect
      and validate player movements. The system uses pattern recognition algorithms to compare player actions
      against the required sequence, providing immediate feedback through lights and sounds.</p>

      <h3>Challenges & Learning</h3>
      <p>Developing this project involved calibrating sensors for accurate motion detection, implementing
      reliable pattern recognition, and creating an intuitive user experience that translates the classic
      game mechanics into physical movements. Watch the video above to see the Simon IoT Game in action!</p>
    `,
  },
  {
    id: 6,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    excerpt: 'This site — built with React, Tailwind, and probably too much attention to dark mode.',
    thumbnail: '/assets/Logo/header-1280.jpg',
    thumbnailAlt: 'CrazyDog banner artwork used as the site header graphic',
    githubUrl: 'https://github.com/CrazyDog559/Drew-Wan-Website',
    date: 'December 2025',
    category: 'Web Development',
    techStack: ['React.js', 'Tailwind CSS', 'Vite', 'React Router', 'Hostinger'],
    description: `
      <p>This site started as a standard multi-page portfolio and has since been rebuilt into a single-page
      layout with anchor navigation, dark mode, and a shared card/detail template that drives both the
      Projects and Hobbies sections from the same underlying components.</p>

      <h3>Stack</h3>
      <p>React and React Router on Vite, styled entirely with Tailwind CSS. No component library, no CSS-in-JS —
      just utility classes, a design-token layer in CSS custom properties, and a handful of hand-rolled SVG icons.</p>

      <h3>A few specifics</h3>
      <ul>
        <li>Dark mode that respects your OS preference by default, with a manual toggle that persists and no flash of the wrong theme on load</li>
        <li>A generalized <code>EntityCard</code> / <code>EntityDetail</code> pair that both Projects and Hobbies render through, instead of two near-identical templates</li>
        <li>Anchor-based scroll navigation on the homepage, with real routed pages for project/hobby detail views</li>
        <li>Scroll-triggered reveals that switch themselves off under <code>prefers-reduced-motion</code></li>
        <li>A self-hosted photo gallery with category filtering, alongside the Instagram embeds that were already there</li>
      </ul>

      <h3>Deployment</h3>
      <p>Pushes to <code>main</code> trigger a GitHub Actions workflow that builds the site and FTP-deploys the
      output to Hostinger — no manual upload step.</p>
    `,
  },
];

/** The subset shown on the homepage; the full list lives on /projects. */
export const featuredProjects = projects.filter((project) => project.featured);
