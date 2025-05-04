import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "System Analyst",
      icon: <FaCode className="experience-icon" />,
      company: "Tech-A-Lang.",
      period: "Jan - May 2024",
      description: "Developed a Document Management System for WESMAARDEC"
    },
    {
      id: 2,
      title: "Archivist, Quality Assurance Engineer",
      icon: <FaLaptopCode className="experience-icon" />,
      company: "Capstone",
      period: "May 2024 - March 2025",
      description: "Developed a Course Recommendation for Incoming College Students"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="experience-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="experience-content">
        <h1>Experiences</h1>
        
        <div className="experience-grid">
          {experiences.map(exp => (
            <motion.div 
              key={exp.id}
              whileHover={{ y: -5 }}
              className="experience-card"
            >
              <div className="experience-icon-container">
                {exp.icon}
              </div>
              <h2>{exp.title}</h2>
              <h3>{exp.company}</h3>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;