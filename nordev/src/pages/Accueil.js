// src/pages/Accueil.js
import React from "react";
import { Link } from "react-router-dom";
import BarreNavig from "../components/BarreNavig/BarreNavig";

const Accueil = () => {
  return (
    <div>
      <BarreNavig title="Accueil" homeLink="/" />
      <h1>Bienvenue sur la page d'accueil</h1>
      <Link to="/mes-competences">
        <button>Je commence</button>
      </Link>
    </div>
  );
};

export default Accueil;
