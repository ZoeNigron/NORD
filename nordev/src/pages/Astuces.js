import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";

const Accueil = () => {
  useEffect(() => {
    modeAudio(
      "Bienvenue sur la page d'accueil. Vous pouvez accéder à vos compétences et à d'autres fonctionnalités."
    );
  }, []);

  return (
    <div className="accueil-container">
      <Entete />
      <BarreNavig title="Accueil" homeLink="/" />
      <BoutonAudio texte="Bienvenue sur la page d’accueil. Vous pouvez cliquer sur le bouton en bas de la page pour continuer. Cela vous permettra d'accéder à vos compétences et à d'autres fonctionnalités." />

      <Astuce />

      <h2 className="intro-texte">J'améliore mon sens de l'orientation :</h2>

      <Link to="/mes-competences">
        <button className="bouton" onClick={() => console.log("Navigation vers Mes Compétences")}>
          Je commence
        </button>
      </Link>
      
      <Utilisateur />
    </div>
  );
};

export default Accueil;
