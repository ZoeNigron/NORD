// src/pages/MesCompetences.js
import React from "react";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import { Link } from "react-router-dom";
import BoutonAction from "../components/BoutonAction";
import Entete from "../components/Entete";

const Competence = () => {
  return (
    <div>
      <Entete />
      <BarreNavig title="Mes compétences" backLink="/accueil" profileLink="/profil" />
      <Link to="/evaluer-les-distances">
      <BoutonAction texte="Accéder à l'évaluation des distances" onClick={() => console.log("Navigation vers Evaluer les distances")} />
      </Link>
    </div>
  );
};

export default Competence;
