import React, { useState } from "react";
import DistanceLecon2 from "../DistanceLecon/DistanceLecon2";
import "./Entrainement.css";

const Entrainement2 = () => {
  const [distance, setDistance] = useState(null);

  const gererDistanceCalculee = (nouvelleDistance) => {
    console.log("Distance calculée :", nouvelleDistance);
    setDistance(nouvelleDistance);
  };

  return (
    <div>
      <div className="lecon-container">
      <h2>Entraînement</h2>
      <p>
        Commencez par vous entraîner avant de débuter la leçon. Observez la
        carte : le point que vous voyez représente votre position actuelle.
        Regardez devant vous et repérez un élément remarquable. Placez ce point
        sur la carte. L'application vous indiquera la distance réelle entre vous
        et ce point. Répétez cette opération autant de fois que vous le
        souhaitez. Une fois que vous vous sentez à l'aise, nous vous
        recommandons de marcher un peu pour changer d'environnement, puis vous
        pouvez commencer la leçon !
      </p>

      <DistanceLecon2 distanceCalculee={gererDistanceCalculee} />

      {distance !== null && (
        <div className="resultat-container">
          <div className="resultat-titre">
            La distance entre votre position et le point que vous avez
            sélectionné est de
          </div>
          <div className="resultat-valeur">{Math.round(distance)} mètres</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Entrainement2;
