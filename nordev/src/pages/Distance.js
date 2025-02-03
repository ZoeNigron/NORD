// src/pages/EvaluerLesDistances.js
import React from "react";
import BarreNavig from "../components/Navigation/BarreNavig";
import { Link } from "react-router-dom";
import BoutonAction from "../components/BoutonAction/BoutonAction";
import Entete from "../components/Entete/Entete";

const Distance = () => {
  return (
    <div>
      <Entete />
      <BarreNavig
        title="Évaluer les distances"
        backLink="/mes-competences"
        homeLink="/"
      />
      <Link to="/menu-lecons">
        <BoutonAction
          texte="Mes leçons"
          onClick={() => console.log("Navigation vers Menu Leçons")}
        />
      </Link>
    </div>
  );
};

export default Distance;
