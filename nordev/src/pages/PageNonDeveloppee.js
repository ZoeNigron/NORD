import React from "react";
import Entete from "../components/Entete/Entete";
import BarreNavig from "../components/Navigation/BarreNavig";

function PageNonDeveloppee() {
  const texteAudio = "Cette page n'est pas encore disponible. Revenez plus tard.";

  return (
    <div>
      <Entete />
      <BarreNavig 
        title="Page indisponible" 
        texteAudio={texteAudio} 
      />

      <h1>Page indisponible pour le moment</h1>
      <p>Cette fonctionnalité n'a pas été développée pour ce projet.</p>
    </div>
  );
}

export default PageNonDeveloppee;
