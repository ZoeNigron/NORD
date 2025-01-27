import React from 'react';
import BoutonNavig from './BoutonNavig'; // Import du composant BoutonNavig
import { FaHome, FaUserAlt } from 'react-icons/fa'; // Icônes Font Awesome
import './BarreNavig.css'; // Import du fichier CSS

const BarreNavig = () => {
  return (
    <nav className="barreNavig">
      <div className="navLinks">
        <BoutonNavig to="/" icon={<FaHome />} text="Accueil" />
        <BoutonNavig to="/login" icon={<FaUserAlt />} text="Connexion" />
      </div>
    </nav>
  );
};

export default BarreNavig;
