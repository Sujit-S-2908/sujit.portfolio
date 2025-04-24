import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Data Science 101',
      issuer: 'IBM',
      date: 'Jan 2024',
      url: '#'
    },
    {
      title: 'Python 101 for Data Science',
      issuer: 'IBM',
      date: 'Dec 2023',
      url: '#'
    },
    {
      title: 'Data Science Methodology',
      issuer: 'IBM',
      date: 'Nov 2023',
      url: '#'
    },
    {
      title: 'Prompt Engineering for Everyone',
      issuer: 'DeepLearning.AI',
      date: 'Oct 2023',
      url: '#'
    },
    {
      title: 'MySQL Command Line',
      issuer: 'IBM',
      date: 'Sep 2023',
      url: '#'
    },
    {
      title: 'SQL and Relational Databases 101',
      issuer: 'IBM',
      date: 'Aug 2023',
      url: '#'
    },
    {
      title: 'Introduction to Machine Learning Operations (MLOps)',
      issuer: 'IBM',
      date: 'Jul 2023',
      url: '#'
    },
    {
      title: 'Introduction to Machine Learning',
      issuer: 'IBM',
      date: 'Jun 2023',
      url: '#'
    },
    {
      title: 'Generative AI for All',
      issuer: 'IBM',
      date: 'May 2023',
      url: '#'
    },
    {
      title: 'Foundation of Prompt Engineering',
      issuer: 'IBM',
      date: 'Apr 2023',
      url: '#'
    },
    {
      title: 'AWS Flash - Generative AI with Diffusion Models',
      issuer: 'AWS',
      date: 'Mar 2023',
      url: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center p-4 rounded-xl bg-background border border-gray-800 hover:border-accent transition-all duration-300 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
              >
                <div className="mr-3 p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(FaAward, { size: 24 })}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">{cert.title}</h3>
                  <div className="flex justify-between text-sm text-text-secondary">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 