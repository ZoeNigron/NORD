// src/pages/EvaluerLesDistances.js
import React from "react";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import { Link } from "react-router-dom";

const Distance = () => {
  return (
    <div>
      <BarreNavig title="Évaluer les distances" backLink="/mes-competences" homeLink="/" />
      <h1>Évaluer les distances</h1>
      <Link to="/menu-lecons">
        <button>Accéder à mes leçons</button>
      </Link>
    </div>
  );
};

export default Distance;
