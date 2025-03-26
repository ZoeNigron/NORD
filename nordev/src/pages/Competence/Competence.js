import React, { useEffect, useState } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../../components/Entete/Entete";
import "./Competence.css";
import { getCompetences } from "../../api"; // Import de la fonction API

function Competence() {
  const [competences, setCompetences] = useState([]);
  const texteAudio = "Bienvenue dans la section compétences. Sélectionnez une compétence pour commencer.";

  useEffect(() => {
    const fetchCompetences = async () => {
      const data = await getCompetences();
      setCompetences(data); // Met à jour l'état avec les données récupérées
    };

    fetchCompetences();
  }, []);

  return (
    <div className="competence-container">
      <Entete />
      <BarreNavig title="Mes compétences" texteAudio={texteAudio} />

      <div className="competence-liste">
        {competences.map((competence) => (
          <div className="competence-box" key={competence.id}>
            <h3 className="competence-titre">{competence.titre}</h3>
            <p className="competence-description">{competence.description}</p>
            <div className="competence-icone">{competence.icon}</div>
            <Link to={competence.lien}>
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
