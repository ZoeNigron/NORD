import React from 'react';
import { Link } from 'react-router-dom';
import './BoutonNavig.css';

function BoutonNavig ({ to, icon, text }) {
  return (
    <Link to={to} className="button">
      <div className="icon">{icon}</div>
      <span className="text">{text}</span>
    </Link>
  );
};

export default BoutonNavig;
