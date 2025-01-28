// src/pages/Accueil.js
import React from "react";
import { Link } from "react-router-dom";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import BoutonAction from "../components/BoutonAction";
import Entete from "../components/Entete";

const Accueil = () => {
  return (
    <div>
      <Entete />
      <BarreNavig title="Accueil" homeLink="/" />
      <Link to="/mes-competences">
      <BoutonAction texte="Je commence" onClick={() => console.log("Navigation vers Mes Compétences")} />
      </Link>
    </div>
  );
};

export default Accueil;
