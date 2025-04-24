import React from 'react';
import { FaCode, FaLaptopCode, FaMicrochip, FaMusic } from 'react-icons/fa';

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

interface Interest {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const interests: Interest[] = [
    {
      icon: renderIcon(FaLaptopCode, { className: "text-3xl text-accent" }),
      title: 'Tech Enthusiast',
      description: 'Passionate about new technologies and their applications.'
    },
    {
      icon: renderIcon(FaCode, { className: "text-3xl text-accent" }),
      title: 'Problem-Solving',
      description: 'Enjoy tackling complex problems with elegant solutions.'
    },
    {
      icon: renderIcon(FaMicrochip, { className: "text-3xl text-accent" }),
      title: 'Quick Learner',
      description: 'Adapt rapidly to new technologies and methodologies.'
    },
    {
      icon: renderIcon(FaMusic, { className: "text-3xl text-accent" }),
      title: 'Singing',
      description: 'Finding harmony in code and music alike.'
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-6">
              I'm a third-year B.Tech student at Coimbatore Institute of Technology majoring in 
              Artificial Intelligence and Data Science. Passionate about building real-world solutions 
              through AI, IoT, and Machine Learning.
            </p>
            
            <div className="p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg mb-6">
              <p className="italic text-lg">
                "I don't just solve problems—I automate them into solutions."
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-background border border-gray-800 hover:border-accent transition-all duration-300"
                >
                  <div className="mb-3">{interest.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
                  <p className="text-text-secondary">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 