import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blogs.css';
import { blogPosts } from '../data/blogData';

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blogs-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="blogs-content">
        <h1>My Blogs</h1>
        <p className="blog-subtitle"></p>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <motion.div 
              key={post.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="blog-card"
            >
              <Link to={`/blog/${post.id}`} className="card-link">
                <div className="card-image-container">
                  <img src={post.thumbnail} alt={post.title} className="card-image" />
                  <div className="card-overlay">
                    <h3>{post.title}</h3>
                    <p className="card-date">{post.date}</p>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <button className="view-more-btn">View Full Post →</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;