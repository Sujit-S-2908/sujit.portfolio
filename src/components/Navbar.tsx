import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'about', text: 'About' },
    { id: 'experience', text: 'Experience' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'certifications', text: 'Certifications' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 ${
        navbarBg 
          ? `backdrop-blur-lg ${darkMode ? 'bg-background/90' : 'bg-white/90'} shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer text-accent"
        >
          Sujit S
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              className="text-text-secondary hover:text-accent cursor-pointer transition-colors duration-300"
            >
              {link.text}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              renderIcon(FaSun, { className: 'text-yellow-400' })
            ) : (
              renderIcon(FaMoon, { className: 'text-accent' })
            )}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              renderIcon(FaSun, { className: 'text-yellow-400' })
            ) : (
              renderIcon(FaMoon, { className: 'text-accent' })
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-gray-700"
          >
            {mobileMenuOpen ? (
              renderIcon(FaTimes, { className: 'text-accent' })
            ) : (
              renderIcon(FaBars, { className: 'text-accent' })
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${darkMode ? 'bg-background' : 'bg-white'} shadow-lg py-4`}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              className="block py-2 px-4 text-text-secondary hover:text-accent cursor-pointer transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 