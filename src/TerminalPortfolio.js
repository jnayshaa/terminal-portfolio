import { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import portfolioData from './data/portfolioData';

// Helper functions
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const CommandInput = ({ 
  inputValue, 
  setInputValue, 
  handleCommand, 
  commandHistory,
  historyIndex,
  setHistoryIndex,
  showSuggestions,
  suggestions,
  handleSuggestionClick
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInputValue(commandHistory[commandHistory.length - 1 - historyIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInputValue(commandHistory[commandHistory.length - 1 - historyIndex + 1]);
      } else {
        setHistoryIndex(-1);
        setInputValue('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInputValue(suggestions[0]);
      }
    }
  };
  
  return (
    <div className="flex items-start">
      <span className="text-green-500 pr-2">{portfolioData.config.promptString}</span>
      <div className="relative flex-grow">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none text-green-500 font-mono"
          autoFocus
        />
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 mt-1 w-full bg-gray-900 border border-gray-700 rounded z-10">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-2 py-1 hover:bg-gray-800 cursor-pointer text-green-500"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const OutputLine = ({ content, type = 'text' }) => {
  if (type === 'command') {
    return (
      <div className="flex">
        <span className="text-green-500 pr-2">{portfolioData.config.promptString}</span>
        <span className="text-green-500">{content}</span>
      </div>
    );
  } else if (type === 'contact') {
    const isEmail = content.platform.toLowerCase() === 'email';
    const href = isEmail ? `mailto:${content.link}` : content.link;

    return (
      <div className="pl-2 text-green-300">
        <span className="font-semibold">{content.platform}:</span>{' '}
        <a
          href={href}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.username}
        </a>
      </div>
    );
  } else {
    return <div className="text-green-300 pl-0">{content}</div>;
  }
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-green-500 font-mono">{project.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="mb-4">
          <p className="text-green-300 mb-2">{project.description}</p>
          <div className="mb-2">
            <span className="text-gray-400">Tech Stack: </span>
            <span className="text-green-300">{project.tech.join(', ')}</span>
          </div>
          <div>
            <span className="text-gray-400">Link: </span>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.link}
            </a>
          </div>
        </div>
        <div className="text-right">
          <button 
            onClick={onClose}
            className="bg-gray-800 text-green-500 px-4 py-2 rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-green-500 font-mono">{experience.title} at {experience.company}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="mb-4 text-green-300">
          <ul className="list-disc pl-5">
            {experience.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <p className="text-gray-400">Duration: <span className="text-green-300">{experience.duration}</span></p>
        </div>
        <div>
            <span className="text-gray-400">Link: </span>
            <a 
              href={experience.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {experience.link}
            </a>
          </div>
        <div className="text-right">
          <button 
            onClick={onClose}
            className="bg-gray-800 text-green-500 px-4 py-2 rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


const MatrixEffect = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-green-500 text-4xl font-bold">
        {portfolioData.easterEggs.matrix}
      </div>
    </div>
  );
};

export default function TerminalPortfolio() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(
    portfolioData.config.welcomeMessage.map(line => ({ content: line, type: 'text' }))
  );
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showMatrix, setShowMatrix] = useState(false);
  
  const terminalRef = useRef(null);
  
  // Scroll to bottom of terminal when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);
  
  // Handle suggestions as user types
  useEffect(() => {
    if (input.trim() === '') {
      setShowSuggestions(false);
      return;
    }
    
    const matchedCommands = portfolioData.commands.filter(cmd => 
      cmd.startsWith(input.toLowerCase())
    );
    
    setSuggestions(matchedCommands);
    setShowSuggestions(matchedCommands.length > 0);
  }, [input]);
  
  const handleCommandExecution = (cmd) => {
    // Add command to history
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
    
    // Add command to output
    const newOutput = [...output, { content: cmd, type: 'command' }];
    
    // Process command
    const cmdLower = cmd.toLowerCase().trim();
    
    if (cmdLower === 'help') {
      newOutput.push({ content: 'Available commands:', type: 'text' });
      portfolioData.commandDescriptions.forEach(item => {
        newOutput.push({ content: `  ${item.command.padEnd(14)} - ${item.description}`, type: 'text' });
      });
    } 
    else if (cmdLower === 'ls' || cmdLower === 'ls projects') {
      newOutput.push({ content: 'Projects:', type: 'text' });
      portfolioData.projects.forEach(project => {
        newOutput.push({ content: `  ${project.id} - ${project.title}`, type: 'text' });
      });
    } 
    else if (cmdLower === 'ls' || cmdLower === 'ls experience') {
      newOutput.push({ content: 'Experience:', type: 'text' });
      portfolioData.experience.forEach(exp => {
        newOutput.push({ content: `  ${exp.title} at ${exp.company}, id: ${exp.id}`, type: 'text' });
      });
    } 
    else if (cmdLower.startsWith('open ')) {
      const idToOpen = cmdLower.split(' ')[1];
      // Check if it's a project
      const project = portfolioData.projects.find(p => p.id === idToOpen);
      if (project) {
        newOutput.push({ content: `Opening ${project.title}...`, type: 'text' });
        setSelectedProject(project);
      } else {
        // Check if it's experience
        const exp = portfolioData.experience.find(e => e.id === idToOpen);
        if (exp) {
          newOutput.push({ content: `Opening ${exp.title} at ${exp.company}...`, type: 'text' });
          setSelectedExperience(exp);
        } else {
          newOutput.push({ content: `Error: Item '${idToOpen}' not found. Use 'ls projects' or 'ls experience' to see available items.`, type: 'text' });
        }
      }
    } 
    else if (cmdLower === 'about') {
      newOutput.push({ content: 'About Me:', type: 'text' });
      portfolioData.about.forEach(line => {
        newOutput.push({ content: `  ${line}`, type: 'text' });
      });
    } 
    else if (cmdLower === 'skills') {
      newOutput.push({ content: 'Technical Skills:', type: 'text' });
      portfolioData.skills.forEach(skill => {
        newOutput.push({ content: `  ${skill}`, type: 'text' });
      });
    } 
    else if (cmdLower === 'contact') {
    newOutput.push({ content: 'Contact Information:', type: 'text' });
    portfolioData.contactInfo.forEach(contact => {
        newOutput.push({
        type: 'contact',
        content: {
            platform: contact.platform,
            username: contact.username,
            link: contact.link
        }
        });
    });
    }
    else if (cmdLower === 'clear') {
      setOutput([]);
      return;
    } 
    else if (cmdLower === 'history') {
      newOutput.push({ content: 'Command History:', type: 'text' });
      commandHistory.forEach((cmd, index) => {
        newOutput.push({ content: `  ${index + 1}. ${cmd}`, type: 'text' });
      });
    } 
    else if (cmdLower === 'cat readme.md') {
      portfolioData.readme.forEach(line => {
        newOutput.push({ content: line, type: 'text' });
      });
    } 
    else if (cmdLower === 'cd motivation') {
      const randomQuote = getRandomItem(portfolioData.easterEggs.quotes);
      newOutput.push({ content: randomQuote, type: 'text' });
    } 
    else if (cmdLower === 'sudo hire-me') {
      newOutput.push({ content: portfolioData.easterEggs.sudo, type: 'text' });
      newOutput.push({ content: '', type: 'text' });
      newOutput.push({ content: 'I\'m currently available for new opportunities!', type: 'text' });
      newOutput.push({ content: 'Check out my contact information with the "contact" command.', type: 'text' });
    } 
    else if (cmdLower === 'download resume') {
      newOutput.push({ content: 'Initiating resume download...', type: 'text' });
      // In a real implementation, you would trigger a file download here
      newOutput.push({ content: 'This would download a real PDF in the actual implementation.', type: 'text' });
    } 
    else if (cmdLower === 'matrix') {
      newOutput.push({ content: 'Entering the Matrix...', type: 'text' });
      setShowMatrix(true);
    } 
    else if (cmdLower === 'coffee') {
      newOutput.push({ content: portfolioData.easterEggs.coffee, type: 'text' });
    } 
    else {
      newOutput.push({ content: `Command not found: ${cmd}. Type 'help' for available commands.`, type: 'text' });
    }
    
    setOutput(newOutput);
    setInput('');
  };
  
  const handleCommand = () => {
    if (input.trim() === '') return;
    handleCommandExecution(input);
  };
  
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setShowSuggestions(false);
  };
  
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Terminal size={14} className="mr-2" />
            <span>{portfolioData.name.toLowerCase()}@portfolio: ~/terminal</span>
          </div>
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="bg-black border border-gray-700 rounded-b-lg p-4 h-96 overflow-y-auto font-mono text-sm"
        >
          {output.map((line, index) => (
            <OutputLine key={index} content={line.content} type={line.type} />
          ))}
          
          <CommandInput 
            inputValue={input}
            setInputValue={setInput}
            handleCommand={handleCommand}
            commandHistory={commandHistory}
            historyIndex={historyIndex}
            setHistoryIndex={setHistoryIndex}
            showSuggestions={showSuggestions}
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Experience Modal */}
      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}

      {/* Matrix Effect */}
      {showMatrix && (
        <MatrixEffect onClose={() => setShowMatrix(false)} />
      )}
    </div>
  );
}