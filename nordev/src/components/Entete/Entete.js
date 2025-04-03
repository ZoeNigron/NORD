// Ce composant permet de créer l'entête qui est affichée en haut de chaque page. L'utilisateur peut cliquer dessus pour retourner à la page d'accueil, sauf quand il est sur la page de connexion.

import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // on utilise les deux hooks useNavigate et useLocation qui proviennent de la bibliothèque react-router-dom et qui servent à interagir avec la navigation et l'état de l'URL
import "./Entete.css";
import logo from "../../assets/images/logo.png";

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
        className={`logo-contenu ${location.pathname === "/" ? "desactive" : ""}`} 
        onClick={gererClic}
      >
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Entete;