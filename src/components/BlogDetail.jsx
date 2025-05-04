import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BlogDetail.css';
import { blogPosts } from '../data/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found</h2>
        <Link to="/blogs">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-detail-container"
    >
      {/* Cloud Background Elements */}
      <div className="clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>

      <div className="blog-detail-content">
        <Link to="/blogs" className="back-button">← Back to Blogs</Link>
        
        <article className="blog-post-detail">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {post.title}
          </motion.h1>
          
          <div className="post-meta">
            By {post.author} · {post.date}
          </div>
          
          <motion.div 
            className="post-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>{post.content}</p>
          </motion.div>
          
          <motion.div 
            className="post-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {post.images.map((image, index) => (
              <motion.div 
                key={index}
                className="gallery-item"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image}
                  alt={`${post.title} ${index + 1}`}
                  className="gallery-image"
                />
              </motion.div>
            ))}
          </motion.div>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogDetail;