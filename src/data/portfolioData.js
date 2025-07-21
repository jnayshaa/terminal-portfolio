// src/data/portfolioData.js

const portfolioData = {
  // Personal information
  name: "Naysha",
  title: "Full-Stack Developer",
  
  // Projects
  projects: [
    { 
      id: 'portfolio', 
      title: 'Terminal Portfolio', 
      description: 'A Unix-style terminal portfolio website built with React', 
      tech: ['React', 'JavaScript', 'CSS'],
      link: 'https://github.com/yourusername/terminal-portfolio'
    },
    { 
      id: 'ecommerce', 
      title: 'E-Commerce Platform', 
      description: 'Fully functional e-commerce site with cart and payment processing', 
      tech: ['Next.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/yourusername/ecommerce-app'
    },
    { 
      id: 'ai-assistant', 
      title: 'AI Chat Assistant', 
      description: 'Conversational AI assistant with natural language processing', 
      tech: ['Python', 'TensorFlow', 'Flask'],
      link: 'https://github.com/yourusername/ai-assistant'
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
    }
  ],
  
  // Skills
  skills: [
    'JavaScript/TypeScript', 
    'React/Next.js', 
    'Node.js', 
    'Python',
    'MongoDB/PostgreSQL', 
    'Docker', 
    'AWS/GCP', 
    'CI/CD'
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
    'Hey there! I\'m Naysha, a passionate full-stack developer with a love for',
    'building innovative web applications and solving complex problems.',
    '',
    'I have X years of experience in web development, specializing in React,',
    'Next.js, and Node.js. I enjoy creating intuitive user interfaces and',
    'efficient backend systems.'
  ],
  
  
  // README content
  readme: [
    '# Terminal Portfolio',
    '',
    'Welcome to my interactive terminal portfolio! Navigate through',
    'my projects and information using Unix-like commands.',
    '',
    'Built with React and styled to resemble a classic terminal interface.',
    '',
    '## Features',
    '- Interactive command line',
    '- Project showcase',
    '- Skills and contact information',
    '- Easter eggs and fun commands',
    '',
    'Type "help" to see all available commands.'
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
    { command: 'ls projects', description: 'List all projects' },
    { command: 'ls experience', description: 'List all work experience' },
    { command: 'open [project]', description: 'View project details' },
    { command: 'open [experience]', description: 'View experience details' },
    { command: 'about', description: 'About me' },
    { command: 'skills', description: 'My technical skills' },
    { command: 'contact', description: 'How to reach me' },
    { command: 'clear', description: 'Clear the terminal' },
    { command: 'history', description: 'View command history' },
    { command: 'cat README.md', description: 'Display README file' },
    { command: 'cd motivation', description: 'Random programming quote' },
    { command: 'download resume', description: 'Download my resume' }
  ],
  
  // Config
  config: {
    promptString: "naysha@portfolio:~$",
    welcomeMessage: [
      'Welcome to Naysha\'s Terminal Portfolio!',
      'Type "help" to see available commands.'
    ]
  }
};

export default portfolioData;