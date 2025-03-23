import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Entete.css";
import logo from "../../services/images/logo.png";

const Entete = ({ estConnecte }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const gererClic = () => {
    // on empêche la navigation si l'on est déjà sur la page de connexion ("/") ou sur la page de choix de connexion ("/connexion")
    if (location.pathname === "/" || location.pathname === "/connexion") {
      return;
    }

    if (estConnecte) {
      if (location.pathname !== "/accueil") {
        navigate("/accueil");
      }
    } else {
      if (location.pathname !== "/accueil-sans-connexion") {
        navigate("/accueil-sans-connexion");
      }
    }
  };

  return (
    <header className="entete">
      <div 
        className={`logo-container ${location.pathname === "/" || location.pathname === "/connexion" ? "desactive" : ""}`} 
        onClick={gererClic}
      >
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Entete;
