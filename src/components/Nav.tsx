import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import your global CSS

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("Nav component loaded");
  return (
    <nav className="nav">
      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">Candidate Search</Link>
        </li>
        <li className="nav-item">
          <Link to="/savedcandidates" className="nav-link">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;