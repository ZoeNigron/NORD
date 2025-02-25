import React from "react";
import { useNavigate } from "react-router-dom";
import "./Entete.css";
import logo from "../../services/images/logo.png";

const Entete = () => {
  const navigate = useNavigate(); // hook pour la navigation

  const gererClic = () => {
    navigate("/"); // redirige vers la page d'accueil
  };

  return (
    <header className="entete">
      <div className="logo-container" onClick={gererClic}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Entete;
