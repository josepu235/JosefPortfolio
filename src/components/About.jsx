import { motion } from 'framer-motion';
import profileImage from '../assets/jose.jpg';
import './About.css';

const About = () => {
  const skills = [
    { name: 'CSS', percentage: 70 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'Python', percentage: 60 },
    { name: 'PHP', percentage: 70 },
    { name: 'Java', percentage: 65 },
    { name: 'C++', percentage: 70 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="about-content-wrapper">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              "Hi, I'm Josef, a 4th-year Bachelor of Science in Information Technology student at Western Mindanao State University.
              With a passion for designing and problem-solving, I thrive on turning ideas into visually engaging and functional solutions. I'm a fast learner, adept at picking up new tools and technologies, and I excel in analytical thinking—breaking down complex problems into actionable steps."
            </p>
            <p>
              Beyond technical skills, I'm great with people, whether collaborating on projects, explaining concepts, or working in teams. I also handle multitasking efficiently, balancing creativity with precision under tight deadlines. Feel free to explore my portfolio to check out my works—or reach out for collaboration opportunities! Let's create something amazing together.
            </p>

            <div className="skills-section">
              <h2>My Skills</h2>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;