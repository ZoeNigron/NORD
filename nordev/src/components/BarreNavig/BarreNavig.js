import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // React Router
import { FaArrowLeft, FaUserCircle } from "react-icons/fa"; // Icônes
import "./BarreNavig.css"; // Fichier CSS

const BarreNavig = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate(-1); // Navigue vers la page précédente
  };

  return (
    <nav className="barreNavig">
      {/* Flèche de retour */}
      <button className="boutonRetour" onClick={handleRetour}>
        <FaArrowLeft />
      </button>

      {/* Titre dans le rectangle bordeaux */}
      <div className="titrePage">{title || location.pathname.slice(1) || "Accueil"}</div>

      {/* Icône de profil */}
      <button className="profilButton">
        <FaUserCircle />
      </button>
    </nav>
  );
};

export default BarreNavig;
