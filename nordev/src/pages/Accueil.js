import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BarreNavig from "../components/Navigation/BarreNavig";
import BoutonAction from "../components/BoutonAction/BoutonAction";
import Entete from "../components/Entete/Entete";
import Astuce from "../components/Astuce/Astuce";
import "./Accueil.css";

import BoutonAudio from "../components/BoutonAudio";
import modeAudio from "../services/modeAudio";  // Importer la fonction de lecture audio

const Accueil = () => {
  useEffect(() => {
    modeAudio("Bienvenue sur la page d'accueil. Vous pouvez accéder à vos compétences et à d'autres fonctionnalités.");
  }, []);

  return (
    <div className="accueil-container">
      <Entete />
      <BarreNavig title="Accueil" homeLink="/" />
      <BoutonAudio texte="Bienvenue sur la page d'accueil. Vous pouvez accéder à vos compétences et à d'autres fonctionnalités." />

      <Astuce/>

      <h2 className="intro-text">J'améliore mon sens de l'orientation :</h2>

      <Link to="/mes-competences">
        <BoutonAction
          texte="Je commence"
          onClick={() => console.log("Navigation vers Mes Compétences")}
        />
      </Link>
    </div>
  );
};

export default Accueil;
