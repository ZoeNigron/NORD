import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import "./BarreNavig.css";

function BarreNavig ({ title }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate(-1); // pour naviguer vers la page précédente
  };

  return (
    <nav className="barreNavig">
      <button className="boutonRetour" onClick={handleRetour}>
        <FaArrowLeft />
      </button>

      <div className="titrePage">{title|| location.pathname.slice(1) || "Accueil"}</div>

      <button className="profilButton">
        <FaUserCircle />
      </button>
    </nav>
  );
};

export default BarreNavig;
