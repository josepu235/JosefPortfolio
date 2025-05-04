import { motion } from 'framer-motion';
import './Projects.css';
import pokemon from '../assets/blog/Pokemon.jpg';
import pin6 from '../assets/blog/todo.jpg';
import val1 from '../assets/blog/port.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pokemon Battle",
      image: pokemon,
      description: "A Pokemon-style battle game built with React and Json featuring combat mechanics.",
      codeLink: "https://github.com/josepu235/PokemonBattle.git",
      liveLink: "https://pokemon-battle-demo.netlify.app"
    },
    {
      id: 2,
      title: "To-do List",
      image: pin6,
      description: "A To-Do app with local storage, and sleek design",
      codeLink: "https://github.com/josepu235/ToDo-List.git",
      liveLink: "https://todo-yosef.netlify.app/"
    },
    {
      id: 3,
      title: "My First Portfolio",
      image: val1,
      description: "Initial portfolio design showcasing my early work with responsive layouts.",
      codeLink: "https://github.com/josepu235/josepue.github.io",
      liveLink: "https://josepu235.github.io/josepue.github.io/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="projects-content">
        <h1>Projects</h1>
        
        <div className="projects-list">
          {projects.map(project => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="project-item"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-icons">
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-icon"
                      aria-label="View source code"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-icon"
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;