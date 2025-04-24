import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      Hello, this is a test!
    </div>
  );
}

export default App;
