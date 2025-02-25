import React from 'react';
import { Link } from 'react-router-dom';
import './BoutonNavig.css';

function BoutonNavig ({ to, icone, texte }) {
  return (
    <Link to={to} className="bouton">
      <div className="icone">{icone}</div>
      <span className="texte">{texte}</span>
    </Link>
  );
};

export default BoutonNavig;
