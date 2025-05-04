import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Josepue</Link>
        </div>
        
        {/* Hamburger Icon (Mobile Only) */}
        {isMobile && (
          <motion.button 
            className="hamburger"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`line ${isOpen ? 'open' : ''}`} />
            <div className={`line ${isOpen ? 'open' : ''}`} />
            <div className={`line ${isOpen ? 'open' : ''}`} />
          </motion.button>
        )}

        {/* Regular Nav Links (Desktop) */}
        {!isMobile && (
          <div className="nav-links">
            {['Home', 'About', 'Blogs', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className={`nav-link ${location.pathname === `/${item.toLowerCase()}` ? 'active' : ''}`}
                >
                  {item}
                  {location.pathname === `/${item.toLowerCase()}` && (
                    <motion.span 
                      className="nav-underline"
                      layoutId="nav-underline"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile Menu (Animated) */}
        <AnimatePresence>
          {isMobile && isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {['Home', 'About', 'Blogs', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.div 
                  key={item} 
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className={`mobile-nav-link ${location.pathname === `/${item.toLowerCase()}` ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;