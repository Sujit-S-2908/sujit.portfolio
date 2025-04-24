import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  year: string;
  title: string;
  description: string;
}

const SkillDevelopment: React.FC = () => {
  const skillItems: SkillItem[] = [
    {
      year: '2024-II',
      title: 'VR Development',
      description: 'Virtual Reality Development'
    },
    {
      year: '2024-I',
      title: 'Machine Learning',
      description: 'Advanced Machine Learning and AI Development'
    },
    {
      year: '2023-V',
      title: 'Flutter Development',
      description: 'Mobile App Development with Flutter'
    },
    {
      year: '2023-IV',
      title: 'Arduino Programming',
      description: 'Embedded Systems and IoT Development'
    },
    {
      year: '2023-III',
      title: 'Java Development',
      description: 'Enterprise Java Development'
    },
    {
      year: '2023-II',
      title: 'Python Flask',
      description: 'Web Development with Flask Framework'
    },
    {
      year: '2023-I',
      title: 'Python AI Modules',
      description: 'Artificial Intelligence and Machine Learning with Python'
    },
  ];

  return (
    <section id="skill-development" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">Skill Development</h2>
        
        <div className="max-w-3xl mx-auto">
          {skillItems.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex mb-8 group"
            >
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-background border-2 border-accent rounded-full mr-6 relative group-hover:scale-110 transition-transform duration-300">
                <span className="text-accent font-bold">{skill.year}</span>
                <div className="absolute h-full w-0.5 bg-accent/30 top-full left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <div className="flex-grow pt-3">
                <h3 className="text-xl font-bold text-accent mb-1 group-hover:translate-x-2 transition-transform duration-300">
                  {skill.title}
                </h3>
                <p className="text-text-secondary">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopment; 