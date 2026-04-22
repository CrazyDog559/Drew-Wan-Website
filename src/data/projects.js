export const projects = [
  {
    id: 1,
    slug: 'nas',
    title: 'Building a NAS',
    excerpt: 'A comprehensive guide to building a custom Network Attached Storage system for home use.',
    thumbnail: '/assets/Projects/NAS/Thumbnail.png',
    youtubeId: 'bdis5gb_cj8',
    date: 'December 2025',
    category: 'Hardware',
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
    id: 2,
    slug: 'projectrender',
    title: 'ProjectRender',
    excerpt: 'A community initiative collecting donated computer parts to build systems for those in need.',
    thumbnail: '/assets/Projects/ProjectRender/PR Logo Blue.png',
   
    date: '',
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
    thumbnail: '/assets/Projects/Fridayz/Fridayz Thumbnail.png',
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
    thumbnail: '/assets/Projects/Aquarium-Simulator/Thumbnail.png',
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
    thumbnail: '/assets/Projects/Simon/Thumbnail.png',
    youtubeId: '_tNlj_9OsvQ',
    date: '2022',
    category: 'IoT & Hardware',
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
    excerpt: 'A modern, responsive portfolio website built with React and Tailwind CSS.',
    thumbnail: '/assets/Logo/CrazyDogHeader-D8wfwEUI.png',
    githubUrl: 'https://github.com/CrazyDog559/Drew-Wan-Website',
    date: 'December 2025',
    category: 'Web Development',
    techStack: ['React.js', 'Tailwind CSS', 'Vite', 'React Router', 'Hostinger'],
    description: `
      <p>This portfolio website serves as a comprehensive showcase of my projects, photography, and hobbies. 
      Built with modern web technologies, it demonstrates clean design principles, responsive layouts, and 
      seamless navigation across different sections.</p>
      
      <h3>Technology Stack</h3>
      <p>The website is built using React 18 with Vite as the build tool, providing lightning-fast development 
      and optimized production builds. Tailwind CSS handles all styling with a utility-first approach, making 
      the design system consistent and maintainable across all pages.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Responsive design that works seamlessly across all devices</li>
        <li>Client-side routing with React Router for smooth navigation</li>
        <li>Dynamic project pages with embedded YouTube videos and GitHub links</li>
        <li>Instagram post integration for photography galleries</li>
        <li>Optimized asset loading and performance</li>
        <li>Clean, modern UI with Tailwind CSS utility classes</li>
      </ul>
      
      <h3>Architecture</h3>
      <p>The site follows a component-based architecture with reusable layout components (Header, Footer, Layout) 
      and page-specific components. Project data is centralized in a JavaScript module for easy updates and 
      maintenance. The build process uses Vite for optimal bundling and code splitting.</p>
      
      <h3>Deployment</h3>
      <p>Hosted on Hostinger with automatic deployment workflows. The production build is optimized for 
      performance with minified assets, lazy loading, and proper caching strategies. The .htaccess configuration 
      ensures React Router works correctly with client-side routing on the server.</p>
      
      <h3>Development Process</h3>
      <p>This portfolio was built iteratively, starting with core pages and gradually adding features like 
      Instagram embeds, multiple project types, and hobby sections. The modular structure makes it easy to 
      add new projects and content without disrupting existing functionality.</p>
    `,
  },
];
