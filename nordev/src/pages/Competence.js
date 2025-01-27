// src/pages/MesCompetences.js
import React from "react";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import { Link } from "react-router-dom";

const Competence = () => {
  return (
    <div>
      <BarreNavig title="Mes compétences" backLink="/accueil" profileLink="/profil" />
      <h1>Mes Compétences</h1>
      <Link to="/evaluer-les-distances">
        <button>Accéder à l'évaluation des distances</button>
      </Link>
    </div>
  );
};

export default Competence;
