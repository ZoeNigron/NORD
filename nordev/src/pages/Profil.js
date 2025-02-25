import React from "react";
import BarreNavig from "../components/BarreNavig";

const Profil = () => {
  return (
    <div>
      <BarreNavig title="Profil" backLink="/mes-competences" homeLink="/" />
      <h1>Mon Profil</h1>
      {/* contenu à mettre */}
    </div>
  );
};

export default Profil;
