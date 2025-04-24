import React from 'react';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">
          Sujit S
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-text-secondary">
          Engineering intelligence for a better tomorrow.
        </p>
        
        <div className="mb-8 text-lg md:text-xl text-accent">
          <ReactTyped
            strings={[
              'AI',
              'Data Science',
              'Problem Solver',
              'Innovator'
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1000}
            loop
            className="inline-block"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="https://1drv.ms/b/s!AkHa_T-k5Tghgcw_0G_0wHCOB5Yr_g?e=qoCPpi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Resume
          </a>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="btn btn-outline"
          >
            Explore Projects
          </Link>
        </div>
        
        <div className="mt-16 animate-bounce">
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="text-3xl text-accent cursor-pointer"
          >
            ↓
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 