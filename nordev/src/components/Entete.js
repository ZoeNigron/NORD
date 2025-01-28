import React from "react";
import "./Entete.css";
import logo from "../services/logo.png"; // Assurez-vous d'avoir un logo ici

const Entete = () => {
  return (
    <header className="entete">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Entete;
