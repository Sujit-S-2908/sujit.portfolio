/// <reference types="react-scripts" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "react-typed" {
  export const ReactTyped: React.ComponentType<{
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
    className?: string;
    [key: string]: any;
  }>;
}

// Fix for react-icons
declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  
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
