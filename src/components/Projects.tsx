import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "Digitizing Medical Reports",
      description: "LLM + OCR + CLI Chatbot for enhanced medical interaction.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "LLM", "OCR", "Healthcare"],
      github: "#"
    },
    {
      title: "IoT in Smart Hydroponics",
      description: "Sensor-based data visualization with Firebase and Flask.",
      image: "https://images.unsplash.com/photo-1653942786883-680b8447c698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["IoT", "Firebase", "Flask", "Python"],
      github: "#",
      live: "#"
    },
    {
      title: "Mosaic Image Generation",
      description: "Generative AI using GANs & Autoencoders.",
      image: "https://images.unsplash.com/photo-1655720035861-ba4fd21a598d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["PyTorch", "GANs", "Computer Vision"],
      github: "#"
    },
    {
      title: "Apartment Sales Prediction",
      description: "EDA & Streamlit visualization.",
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      tags: ["Python", "Machine Learning", "Streamlit", "EDA"],
      github: "#",
      live: "#"
    },
    {
      title: "Neural Style Transfer",
      description: "Computer Vision & Streamlit visualization.",
      image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
      tags: ["TensorFlow", "Computer Vision", "Streamlit"],
      github: "#"
    },
    {
      title: "Sentiment Analysis",
      description: "Recurrent Neural Network to classify statements.",
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      tags: ["NLP", "RNN", "TensorFlow", "Sentiment Analysis"],
      github: "#"
    },
    {
      title: "DoItLater",
      description: "Flutter to-do list app.",
      image: "https://images.unsplash.com/photo-1627850604058-52e40a14efae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      tags: ["Flutter", "Dart", "Mobile"],
      github: "#",
      live: "#"
    },
    {
      title: "Flight Booking Reservation",
      description: "C programming based project.",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      tags: ["C", "Data Structures"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 hover:border-accent transition-all duration-300 flex flex-col h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-accent">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 flex gap-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    {renderIcon(FaGithub, { size: 20 })}
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    {renderIcon(FaExternalLinkAlt, { size: 18 })}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 