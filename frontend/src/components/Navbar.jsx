import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <span className="logo-icon">🔥</span>
        </div>
        <div className="title-container">
          <h1 className="org-name">Name of Organization</h1>
          <p className="system-name">Fire Information of Resource Management System</p>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for Location" 
            className="search-input"
          />
          <button className="search-btn" aria-label="Search">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <button className="info-btn" aria-label="Information">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;