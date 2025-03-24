import React, { useEffect } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../../components/Entete/Entete";
import "./Competence.css";
import competences from "../../services/donnees/competences";
import modeAudio from "../../services/fonctions/modeAudio"; 
import BoutonAudio from "../../components/BoutonAudio/BoutonAudio";

function Competence() {
  useEffect(() => {
    modeAudio("Bienvenue dans la section compétences. Sélectionnez une compétence pour commencer.");
  }, []);

  return (
    <div className="competence-container">
      <Entete />
      <BarreNavig
        title="Mes compétences"
        backLink="/accueil"
        profileLink="/profil"
      />

      <BoutonAudio texte="Bienvenue dans la section compétences. Sélectionnez une compétence pour commencer." />

      <div className="competence-liste">
        {competences.map((competence) => (
          <div className="competence-box" key={competence.id}>
            <h3 className="competence-titre">{competence.title}</h3>
            <p className="competence-description">{competence.description}</p>
            <div className="competence-icone">{competence.icon}</div>
            <Link to={competence.link}>
              <button
                className="bouton"
                onClick={() =>
                  console.log(`Navigation vers Compétence ${competence.id}`)
                }
              >
                Accéder à cette compétence
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competence;
