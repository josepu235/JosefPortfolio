import { motion } from 'framer-motion';
import './Projects.css';
import pokemon from '../assets/blog/Pokemon.jpg';
import pin6 from '../assets/blog/todo.jpg';
import val1 from '../assets/blog/port.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pokemon Battle",
      image: pokemon,
      link: "https://github.com/josepu235/PokemonBattle.git"
    },
    {
      id: 2,
      title: "To-do List",
      image: pin6,
      link: "https://todo-yosef.netlify.app/"
    },
    {
      id: 3,
      title: "My First Portfolio",
      image: val1,
      link: "https://josepu235.github.io/josepue.github.io/"
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
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="project-item"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;