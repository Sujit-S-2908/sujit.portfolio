import React from 'react';
import { Chrono } from 'react-chrono';
import { FaBriefcase, FaCode, FaFlask } from 'react-icons/fa';

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
  iconBackground: string;
}

const items = [
  {
    title: "Creative Director",
    cardTitle: "Creative Director",
    cardSubtitle: "Miami, FL",
    cardDetailedText: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    title: "Art Director",
    cardTitle: "Art Director",
    cardSubtitle: "San Francisco, CA",
    cardDetailedText: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
  },
  {
    title: "Web Designer",
    cardTitle: "Web Designer",
    cardSubtitle: "Los Angeles, CA",
    cardDetailedText: "User Experience, Visual Design",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <Chrono
          items={items}
          mode="VERTICAL"
          cardHeight={100}
          theme={{
            primary: "#0f52ba",
            secondary: "#ff6347",
            cardBgColor: "#f0f0f0",
            cardForeColor: "#000",
            titleColor: "#000",
          }}
        />
      </div>
    </section>
  );
};

export default Experience; 