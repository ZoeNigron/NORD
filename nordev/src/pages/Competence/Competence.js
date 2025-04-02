// Cette page affiche les compétences disponbiles sous forme de scroll vertical et laisse la possibilité à l'utilisateur de cliquer sur l'une d'entre elles

import React, { useEffect, useState } from "react";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../../components/Entete/Entete";
import "./Competence.css";
import { obtenirCompetences } from "../../api";

function Competence() {
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    const fetchCompetences = async () => {
      const data = await obtenirCompetences(); // on récupère les compétences depuis l'API
      setCompetences(data);
    };

    fetchCompetences();
  }, []);

  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Mes compétences"
        texteAudio="Bienvenue dans la section compétences. Sélectionnez une compétence pour commencer."
      />

      <div className="liste-competences">
        {competences.map((competence) => (
          <div className="encadre-competence" key={competence.id}>
            <h3 className="titre-competence">{competence.titre}</h3>
            <p className="description-competence">{competence.description}</p>
            <div className="icone-competence">{competence.icone}</div>
            <Link to={competence.lien}>
              <button
                className="bouton-competences"
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
