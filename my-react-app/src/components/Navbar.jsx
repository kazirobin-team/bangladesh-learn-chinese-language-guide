// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Courses', 'Pinyin', 'Vocabulary', 'Resources', 'About', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <div className="logo-text">
            <h1>Learn Chinese</h1>
            <span>with <em>Kazi Robin</em></span>
          </div>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className={index === 0 ? 'active' : ''}
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;