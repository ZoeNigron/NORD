import React from "react";
import BarreNavig from "../components/Navigation/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../components/Entete/Entete";
import "./Competence.css";
import competences from "../services/donnees/competences";

function Competence () {
  return (
    <div className="competence-container">
      <Entete />
      <BarreNavig title="Mes compétences" backLink="/accueil" profileLink="/profil" />
      
      <div className="competence-list">
        {competences.map((competence) => (
          <div className="competence-box" key={competence.id}>
            <h3 className="competence-title">{competence.title}</h3>
            <p className="competence-description">{competence.description}</p>
            <div className="competence-icon">{competence.icon}</div>
            <Link to={competence.link}>
              <button className="bouton"
                onClick={() => console.log(`Navigation vers Compétence ${competence.id}`)}>
                Accéder à cette compétence
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competence;
