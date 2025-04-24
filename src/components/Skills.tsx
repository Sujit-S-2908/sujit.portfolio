import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaCode, 
  FaDatabase, 
  FaBrain, 
  FaReact,
  FaLaptopCode
} from 'react-icons/fa';

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
}

const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  const skills: Skill[] = [
    {
      name: 'Python',
      icon: renderIcon(FaPython, { className: "text-4xl text-blue-500" }),
      proficiency: 90
    },
    {
      name: 'Data Structures & Algorithms',
      icon: renderIcon(FaCode, { className: "text-4xl text-green-500" }),
      proficiency: 85
    },
    {
      name: 'Prompt Engineering',
      icon: renderIcon(FaLaptopCode, { className: "text-4xl text-yellow-500" }),
      proficiency: 88
    },
    {
      name: 'Machine Learning / Deep Learning',
      icon: renderIcon(FaBrain, { className: "text-4xl text-purple-500" }),
      proficiency: 82
    },
    {
      name: 'Web Development',
      icon: renderIcon(FaReact, { className: "text-4xl text-cyan-400" }),
      proficiency: 78
    },
    {
      name: 'Data Science',
      icon: renderIcon(FaDatabase, { className: "text-4xl text-red-500" }),
      proficiency: 87
    }
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3">{skill.name}</h3>
              </div>
              
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: animated ? `${skill.proficiency}%` : 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-accent"
                />
              </div>
              <div className="mt-2 text-right text-sm text-text-secondary">
                {skill.proficiency}%
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30 text-center">
          <h3 className="text-xl font-bold mb-2 text-purple-400">
            Currently Exploring
          </h3>
          <p className="text-text-secondary">
            LLMs • Generative AI • MLOps
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills; 