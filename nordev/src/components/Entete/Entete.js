import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Entete.css";
import logo from "../../services/images/logo.png";

const Entete = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const gererClic = () => {
    if (location.pathname !== "/") { // on empêche la navigation si on est sur la page de connexion
      navigate("/accueil");
    }
  };

  return (
    <header className="entete">
      <div 
        className={`logo-container ${location.pathname === "/" ? "desactive" : ""}`} 
        onClick={gererClic}
      >
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Entete;
