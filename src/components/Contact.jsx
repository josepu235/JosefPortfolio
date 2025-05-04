import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="contact-content">
        <h1>Keep In Touch</h1>
        
        <div className="contact-info">
          <div className="contact-address">
            <h2>Address</h2>
            <p>2Green Valley, Manicahan</p>
            <p>Zamboanga City, Philippines</p>
          </div>
          
          <div className="contact-details">
            <h2>Contact</h2>
            <p>+639659523237</p>
            <p>sogradiel123@gmail.com</p>
          </div>
        </div>
        
        <div className="social-icons">
          <a href="https://github.com/josepu235" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.facebook.com/josepue30/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://x.com/sanctuary1738?t=QDw_bMYdQsqWiP2exZYB_g&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/josepuuee/profilecard/?igsh=MWs5cXR3N3N6YW8xcQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;