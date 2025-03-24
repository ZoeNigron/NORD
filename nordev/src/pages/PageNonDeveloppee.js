import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Entete from "../components/Entete/Entete";
import BarreNavig from "../components/Navigation/BarreNavig";
import modeAudio from "../services/fonctions/modeAudio";
import BoutonAudio from "../components/BoutonAudio/BoutonAudio";

function PageNonDeveloppee() {
  useEffect(() => {
    modeAudio("Cette page n'est pas encore disponible. Revenez plus tard.");
  }, []);

  return (
    <div>
      <Entete />
      <BarreNavig title="Page indisponible" homeLink="/" />

      <BoutonAudio texte="Cette page n'est pas encore disponible. Revenez plus tard." />

      <h1>Page indisponible pour le moment</h1>
      <Link to="/"></Link>
      <p>Cette fonctionnalité n'a pas été développée pour ce projet.</p>
    </div>
  );
}

export default PageNonDeveloppee;
