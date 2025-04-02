// Cette page permet d'indiquer qu'une fonctionnalité est indisponible. Elle est utilisée dans mon code pour rediriger l'utilisateur vers des leçons non implémentées (mais tout de même ajoutables depuis le Swagger)

import React from "react";
import Entete from "../../components/Entete/Entete";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import "./PageNonDeveloppee.css";

function PageNonDeveloppee() {
  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Page indisponible"
        texteAudio="Cette page n'est pas encore disponible. Revenez plus tard."
      />

      <h1 className="page-indisponible">Page indisponible pour le moment</h1>
      <p className="texte-page-indisponible">
        Cette fonctionnalité n'a pas été développée pour ce projet.
      </p>
    </div>
  );
}

export default PageNonDeveloppee;
