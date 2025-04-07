// Cette page représente la page d'accueil de mon application, elle présente l'astuce du jour et laisse la possibilité de découvrir les autres astuces, puis elle affiche un bouton "Je commence" qui permet de commencer à travailler ses compétences

import React from "react";
import { Link } from "react-router-dom";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Astuce from "../../components/Astuce/Astuce";
import "./Accueil.css";

const Accueil = () => {
  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Accueil"
        texteAudio="Bienvenue sur la page d’accueil. Vous pouvez cliquer sur le bouton en bas de la page pour continuer. Cela vous permettra d'accéder à vos compétences et à d'autres fonctionnalités."
      />

      <Astuce />

      <div className="section-intro">
        <h2 className="texte-intro">J'améliore mon sens de l'orientation :</h2>
        <Link to="/mes-competences">
          <button
            className="bouton-commencer"
            onClick={() => console.log("Navigation vers Mes Compétences")}
          >
            Je commence
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Accueil;
