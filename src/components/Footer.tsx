import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'GitHub',
      url: 'https://github.com/',
      icon: renderIcon(FaGithub, { size: 20 })
    },
    { 
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/',
      icon: renderIcon(FaLinkedin, { size: 20 })
    },
    { 
      name: 'Email',
      url: 'mailto:sujits2908@gmail.com',
      icon: renderIcon(FaEnvelope, { size: 20 })
    },
    { 
      name: 'Website',
      url: '#',
      icon: renderIcon(FaGlobe, { size: 20 })
    }
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-accent">Sujit S</h2>
            <p className="text-text-secondary mt-2 text-center">
              Engineering intelligence for a better tomorrow.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-text-secondary text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Sujit S. All rights reserved.</p>
            <p className="mt-1">
              <span className="text-accent">AI & Data Science Student</span> | Coimbatore Institute of Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 