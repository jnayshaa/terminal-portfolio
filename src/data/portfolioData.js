// src/data/portfolioData.js

const portfolioData = {
  // Personal information
  name: "Naysha",
  title: "Astronomer, Developer, Creator",
  
  // Projects
  projects: [
    { 
      id: 'simonsigns', 
      title: 'Simon Signs - Sign Language Game App (in Development)', 
      description: [
        'Built a Godot-based memory reinforcing game to teach sign language, tested by 50+ users with 95% positive usability feedback.',
        'Currently expanding into a Flutter app at 1871, Chicago'
      ],
      tech: ['Flutter', 'GDScript', 'Godot'],
      link: 'https://github.com/yourusername/terminal-portfolio'
    },
    { 
      id: 'gradence', 
      title: 'Gradence', 
      description: [
        "Participated in Meeedly's Global Summer Challenge, a prestigious 3-week program organized by Meeedly, focused on creativity, productivity, and skill demonstration.",
        'Worked in a team of 6 to develop Gradence, a course grader and feedback web app helping you choose college courses smarter, not harder!'
      ],
      tech: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'Supabase', 'PLpgSQL', 'HTML', 'CSS'],
      link: 'https://gradence.netlify.app/'
    },
    { 
      id: 'chemtest', 
      title: 'ChemTest (Software Engineering)', 
      description: 'Built a scalable backend framework for a chemical reaction testing system ChemTest using Python and pandas, emphasizing fault detection and data processing efficiency for chemical reaction networks', 
      tech: ['Next.js', 'MongoDB', 'Stripe'],
      link: 'N/A'
    },
    { 
      id: 'matchup', 
      title: 'MatchUp', 
      description: [
        'Built a full-stack matchmaking web app in React.js, Gatsby, and MongoDB matching users based on their gaming skills, onboarding 200+ users during Uncommon Hacks at UChicago',
        'Integrated Auth0 authentication and responsive UI/UX to support real-time matches based on gameplay skill metrics'
      ], 
      tech: ['React.js', 'Gatsby', 'MongoDB', 'Auth0', 'Node.js'],
      link: 'https://devpost.com/software/matchup-pb89fo'
    },
    { 
      id: 'musicgenre', 
      title: 'Machine Learning For Music Genre Analysis', 
      description: [
        'Developed multiple computer programs to classify over 10 music genres from Kaggle and personal datasets with 70%+ accuracy using algorithms like Random Forest, SVM, Linear Regression, KNN, and Decision Trees',
        'Designed feature extraction techniques to improve classification across diverse acoustic datasets'
      ], 
      tech: ['scikit-learn', 'pandas', 'pyTorch', 'NumPy'],
      link: 'https://github.com/jnayshaa/MusicGenreAnalysis'
    }
  ],
  // Work experience
  experience: [
    {
      id: 'exospore',
      title: 'Exospore, Researcher',
      company: 'SETI, NASA',
      duration: 'June 2024 - Present',
      link: 'https://tinyurl.com/yktc2uex',
      description: [
        "Optimized CNN models using Detectron2 for bacterial spore classification in SEM images (94% precision-recall).",
        "Implemented large-scale parallelization & hyperparameter tuning with Ray Tune on NVIDIA GPUs (GCP).",
        "Contributed to Exospore, a planetary protection project studying microorganism survival in Martian-like conditions."
      ]},
    {
      id: 'webdev',
      title: 'Web Developer',
      company: 'Virufy',
      duration: 'June 2024 - September 2024',
      description: [
        "Boosted web app performance to 95+ PageInsights by designing and deploying a full-stack solution using React.js, Node.js, and TypeScript.",
        "Accelerated development cycles by integrating CI/CD workflows and QA testing in an Agile team, resolving key bugs."
      ]
    },
    {
      id: 'mcv',
      title: 'Research - Magnetic Cataclysmic Variables',
      company: 'MACRO',
      duration: 'June 2025 - July 2025',
      description: [
        "Conducting first-ever simultaneous multiwavelength observations of LX Ser via VLA (radio), Winer Observatory (optical), and Chandra (X-ray)",
        "Analyzing 4+ hours of coordinated data to study LX Ser’s pulsing variability and accretion behavior across spectral bands",
        "Investigating magnetic field effects and emission correlations to better characterize system geometry and variability mechanisms"
      ]
    },
    {
      id: 'spectroscopic',
      title: 'Research - Spectroscopic Study of Galaxies',
      company: 'Independent',
      duration: 'August 2023 - June 2024',
      link: 'https://tinyurl.com/yubmbr6c',
      description: [
        "Analyzed astronomical data from H-alpha galaxies using Python, employing algorithms for feature extraction and property estimation (e.g., star formation rate, chemical abundances and gas temperature)."
      ]
    },
    {
      id: 'eclipsing',
      title: 'Research - Eclipsing Binaries',
      company: 'Independent',
      duration: 'April 2024 - June 2024',
      link: 'https://tinyurl.com/46nnww7d',
      description: [
        "Studied Algol-type binary system ‘V1024 Her’ by collecting 5 nights of RLMT telescope data; co-led analysis and presented findings at the American Astronomical Society (AAS) Conference as part of a multi-institutional research team."
      ]
    },
    {
      id: 'balance',
      title: 'Project Scientist',
      company: 'University of Iowa',
      duration: 'July 2023',
      link: 'https://tinyurl.com/mvezdhwz',
      description: [
        "Launched a high-altitude balloon to 110,000 ft to measure cosmic ray variation using Arduino and Geiger counters in 3D-printed payload",
        "Coded C++, Java, and Python scripts to collect and analyze 50,000+ gamma-ray counts across 3 filtered energy bands",
        "Presented results on altitude vs. radiation trends at Midstates and University of Iowa undergraduate research conferences"
      ]
    },
    {
      id: 'socialmedia',
      title: 'Social media manager',
      company: 'Knox College',
      duration: 'October 2022 - present',
      link: 'https://www.instagram.com/reel/C6eQ07Oh_w3/',
      description: [
        "Content creator for all Knox social media accounts including Facebook, Instagram, LinkedIn, and Twitter, as well as publishing dashboards",
        "Strategize campaign ideas and determine a campaign's level of success, using analytics tools which boosted engagement and user-relations by 55%"
      ]
    },
    {
      id: 'diversity',
      title: 'Research - Diversity In The Workplace Through A Photojournalistic Lens',
      company: 'Knox College',
      duration: 'December 2023',
      link:"",
      description: [
        "Conducted a one-on-one ethnographic interview and captured 80+ field images to examine diversity in an immigrant-owned bakery",
        "Transcribed and thematically coded interview + visual data to identify challenges in demographic and abstract workplace inclusion"
      ]
    },
  ],
  
// Skills
  skills: [
  {
    category: 'Languages & Frameworks',
    items: ['HTML', 'CSS', 'Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash', 'GDScript', 'React.js', 'Node.js', 'Swift']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'MongoDB', 'AWS', 'Google Cloud Platform', 'NVIDIA GPUs']
  },
  {
    category: 'Machine Learning & Data',
    items: ['PyTorch', 'scikit-learn', 'Ray Tune', 'NumPy', 'pandas', 'CUDA']
  },
  {
    category: 'Development Practices',
    items: ['Agile (Scrum)', 'DevOps', 'SDLC', 'REST APIs', 'Software Testing', 'Product Management', 'SaaS']
  },
  {
    category: 'Collaboration & Design',
    items: ['JIRA', 'Figma', 'Canva']
  },
  {
    category: 'Core Strengths',
    items: ['Problem-Solving', 'Communication', 'Leadership', 'Analytical Thinking', 'Adaptability', 'Learning New Technologies']
  },
  {
    category: 'Hobbies',
    items: ['Kathak', 'Creating Mandalas', 'Movie Buff', 'Redesigning Everything', 'Foodie']
  },
  ],
  
  // Contact information
  contactInfo: [
    { platform: 'Email', link: 'njain@knox.edu', username: 'njain@knox.edu' },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/naysha-jain', username: 'in/naysha-jain' },
    { platform: 'GitHub', link: 'https://github.com/jnayshaa', username: 'jnayshaa' },
    { platform: 'Medium', link: 'https://medium.com/@jnaysha', username: '@jnaysha' }
  ],
  
  // About information
  about: [
  "Namaste! I’m Naysha, a CS + Physics-Astronomy student, researcher, and someone who’s as comfortable tweaking AI models as I am obbserving at the observatory.",
  "",
  "I’ve spent the last few years building things at the intersection of tech, science, and self-expression",
  "",
  "I’ve worked with various tech, and I love turning data into stories, whether that’s through ML, iOS apps, or high-altitude balloon experiments.",
  "",
  "But outside the terminal? I’m a certified thinker with sometimes main-character energy. I get excited about clean UI, long research hours, clever plot twists, and late-night ideas that somehow become real projects.",
  "",
  "I run on coffee, chaos, and curiosity, and I’m always one Notion page away from organizing literally anything.",
  "",
  "I geek out over the little aesthetic things: symmetry in motion, light in a frame, structure in a scatterplot.",
  "",
  "You’ll usually find me exploring new cafes and making space for meaningful coffee chats (virtual’s cool too ☕️)."
  ],

  
  // README content
  readme:[
    '## More About Me',
    '',
    "- Been grooving as a Kathak dancer for 16 years — it’s kinda my thing! ",
    '  → Watch my latest performance: https://youtu.be/E1IplD4I6vg?feature=shared',
    '',
    "- I love capturing cool videos and pictures. I am an avid movie watcher especially for critiquing cinematography — Interstellar, The Intern, Catch Me If You Can are some of my faves.",
    "- I think I'll probably add a section of my movie reviews here soon, so stay tuned!",
    '',
    "- Sometimes to destress myself, I draw freehand mandalas and single stroke art. And so, I’m all about creativity in everything — whether that’s art, research, projects, or just life stuff.",
    '',
    "- My MBTI is ENFJ, so don’t feel shy to connect with me for a coffee chat (virtual works too ;) )",
    '',
    "- Fluent in Hindi, English, and French — love switching it up and connecting with people in different languages!",
    '',
    "- I’m a foodie at heart, so you can always trust me to find the best local eats wherever I go :)",
  ],
  
  // Easter eggs
  easterEggs: {
    quotes: [
      "The best error message is the one that never shows up. - Thomas Fuchs",
      "First, solve the problem. Then, write the code. - John Johnson",
      "Code is like humor. When you have to explain it, it's bad. - Cory House",
      "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare"
    ],
    matrix: "Wake up, Neo...",
    coffee: "☕ Coffee loaded. Productivity increased by 100%.",
    sudo: "You're now root. Let's build something cool together."
  },
  
  // Available commands
  commands: [
    'help', 'ls', 'ls projects', 'ls experience', 'open', 'about', 'skills', 
    'contact', 'clear', 'history', 'cat README.md', 'cd motivation',
    'sudo hire-me', 'download resume', 'matrix', 'coffee'
  ],
  
  // Command descriptions for help
  commandDescriptions: [
    { command: 'help', description: 'Show this help message' },
    // { command: 'ls projects', description: 'List all projects' },
    // { command: 'ls experience', description: 'List all work experience' },
    // { command: 'open [project]', description: 'View project details' },
    // { command: 'open [experience id]', description: 'View experience details' },
    { command: 'about', description: 'About me' },
    { command: 'skills', description: 'My technical skills' },
    { command: 'contact', description: 'How to reach me' },
    { command: 'ls project/experience', description: 'List all projects/experiences' },
    { command: 'open [project/experience ID]', description: 'View project/experience details' },
    { command: 'clear', description: 'Clear the terminal' },
    { command: 'history', description: 'View command history' },
    { command: 'cat README.md', description: 'Fun Facts!' },
    { command: 'cd motivation', description: 'Random programming quote' },
    { command: 'download resume', description: 'Download my resume' },
  ],
  
  // Config
  config: {
    promptString: "naysha@portfolio:~$",
    welcomeMessage: [
      'Welcome to my interactive terminal portfolio! Navigate through',
      'my projects and information using Unix-like commands.',
      '',
      '## Features',
      '- Interactive command line',
      '- Project showcase',
      '- Skills and contact information',
      '- Easter eggs (try typing a random alphabet to see if you can find one!)',
      '',
      'Type "help" to see all available commands.'
    ]
  }
};

export default portfolioData;