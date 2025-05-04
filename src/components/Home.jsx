import { motion } from 'framer-motion';
import './Home.css';
import cvFile from '../assets/josepueCV.png';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'josepueCV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="home-content">
        <motion.h1 
          className="greeting"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          HELLO I'M Josepue
        </motion.h1>
        
        <motion.h2 
          className="name"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A Web Developer
        </motion.h2>
        
        <motion.p 
          className="bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Feel free to visit my personal portfolio to know more about me, experiences and works. You can download my CV
        </motion.p>
        
        <motion.button 
          className="download-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ 
            y: -3,
            boxShadow: "0 10px 25px rgba(94, 124, 226, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDownload}
        >
          DOWNLOAD CV
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;