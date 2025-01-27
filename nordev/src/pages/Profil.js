// src/pages/Profil.js
import React from "react";
import BarreNavig from "../components/BarreNavig";

const Profil = () => {
  return (
    <div>
      <BarreNavig title="Profil" backLink="/mes-competences" homeLink="/" />
      <h1>Mon Profil</h1>
      {/* Contenu du profil */}
    </div>
  );
};

export default Profil;
