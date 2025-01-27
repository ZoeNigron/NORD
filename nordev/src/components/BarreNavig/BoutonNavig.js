import React from 'react';
import { Link } from 'react-router-dom';
//import { FaHome, FaUserAlt } from 'react-icons/fa'; // Icônes Font Awesome
import './BoutonNavig.css'; // Import du fichier CSS

const BoutonNavig = ({ to, icon, text }) => {
  return (
    <Link to={to} className="button">
      <div className="icon">{icon}</div>
      <span className="text">{text}</span>
    </Link>
  );
};

export default BoutonNavig;
