// Cette page affiche les compétences disponibles sous forme de scroll vertical et laisse la possibilité à l'utilisateur de cliquer sur l'une d'entre elles

import React, { useEffect, useState } from "react";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../../components/Entete/Entete";
import "./Competence.css";
import { obtenirCompetences } from "../../services/api";

// on importe les icônes depuis react-icons (on importe ici les 3 catégories les plus utilisées en général)
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

function obtenirIcone(icone, categorieIcone) { // fonction pour récupérer dynamiquement l’icône de la catégorie gi, md ou fa
  const categories = {
    gi: GiIcons,
    md: MdIcons,
    fa: FaIcons,
  };

  const categorie = categories[categorieIcone?.toLowerCase()];
  const Icone = categorie?.[icone];

  return Icone ? <Icone size={50} /> : null;
}

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
            <div className="icone-competence">
              {obtenirIcone(competence.icone, competence.categorieIcone)}
            </div>

            <h3 className="titre-competence">{competence.titre}</h3>
            <p className="description-competence">{competence.description}</p>

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
