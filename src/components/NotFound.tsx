import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBug, FaHome } from 'react-icons/fa';

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-8 inline-block p-6 bg-red-500/20 rounded-full">
          {renderIcon(FaBug, { className: "text-6xl text-red-500" })}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-accent">404</h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Oops! You found a bug Sujit hasn't solved yet.
        </motion.h2>
        
        <p className="text-text-secondary max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 btn btn-primary"
        >
          {renderIcon(FaHome, { className: "text-2xl" })}
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound; 