import React, { useState } from 'react';
import '../styles/components/Header.css'
import LoginModal from './LoginModal.jsx';
import logo_bant from '../assets/logo_bant.jpeg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img
          src={logo_bant}
          alt="Temenos"
          className="logo-image"
        />
        <span className="logo-text">BANT-ARTIFICIAL</span>
      </div>

      {/* Bouton Toggle pour le menu mobile */}
      <div className="nav-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation */}
      <nav className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <a href="#practice">Practice</a>
        <a href="#compete">Compete</a>
        <a href="#jobs">Jobs</a>
        <a href="#leaderboard">Leaderboard</a>
        <div className="auth-buttons">
          <button onClick={() => setLoginOpen(true)}>Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
        <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

      </nav>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <a href="#practice">Practice</a>
        <a href="#compete">Compete</a>
        <a href="#jobs">Jobs</a>
        <a href="#leaderboard">Leaderboard</a>
      </nav>

      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;