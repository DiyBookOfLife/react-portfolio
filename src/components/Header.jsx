import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="mainmenu sticky">
      <h1 className="name">Toni Thomas</h1>
      <div className="button-container">
        <Link to="/"><button className="button">About Me</button></Link>
        <Link to="/education"><button className="button">Education</button></Link>
        <Link to="/experience"><button className="button">Experience</button></Link>
        <Link to="/contact"><button className="button">Contact</button></Link>
      </div>
    </header>
  );
}

export default Header;
