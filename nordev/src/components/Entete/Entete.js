import React from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import "./Entete.css";
import logo from "../../services/images/logo.png";

const Entete = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleClick = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };

  return (
    <header className="entete">
      <div className="logo-container" onClick={handleClick} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Entete;
