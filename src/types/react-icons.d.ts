import React from 'react';

declare module 'react-icons/fa' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = React.ComponentType<IconBaseProps>;

  // Define all used icons
  export const FaGithub: IconType;
  export const FaCode: IconType;
  export const FaLaptopCode: IconType;
  export const FaMicrochip: IconType;
  export const FaMusic: IconType;
  export const FaAward: IconType;
  export const FaEnvelope: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaBriefcase: IconType;
  export const FaFlask: IconType;
  export const FaLinkedin: IconType;
  export const FaGlobe: IconType;
  export const FaSun: IconType;
  export const FaMoon: IconType;
  export const FaTimes: IconType;
  export const FaBars: IconType;
  export const FaBug: IconType;
  export const FaHome: IconType;
  export const FaExternalLinkAlt: IconType;
  export const FaPython: IconType;
  export const FaDatabase: IconType;
  export const FaBrain: IconType;
  export const FaReact: IconType;
} 