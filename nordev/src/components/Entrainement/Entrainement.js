// Ce composant permet à l'utilisateur de s'entraîner avant de commencer une leçon
// En entrée, il prend une prop : "leconId" (int) pour afficher l'entraînement correspondant. Il utilise "DistanceLecon1" ou "DistanceLecon2" selon l'id de la leçon
// En sortie, il affiche la distance parcourue ou estimée

import React, { useState } from "react";
import DistanceLecon1 from "../DistanceLecon/DistanceLecon1";
import DistanceLecon2 from "../DistanceLecon/DistanceLecon2";
import "./Entrainement.css";

const Entrainement = ({ leconId }) => {
  const [distance, setDistance] = useState(null);

  const gererDistanceCalculee = (nouvelleDistance) => {
    console.log("Distance calculée :", nouvelleDistance);
    setDistance(nouvelleDistance);
  };

  return (
    <div className="entrainement">
      <h2>Entraînement</h2>

      {leconId === 1 ? (
        <>
          <p className="entrainement-texte">
            Commencez par vous entraîner avant de débuter la leçon. Cliquez sur le
            bouton "Démarrer" lorsque vous êtes prêt à marcher. Déplacez-vous sur
            quelques mètres, puis appuyez sur le bouton "Terminer". L'application
            vous indiquera la distance que vous avez parcourue. Répétez cette
            opération plusieurs fois en testant différentes distances. Lorsque vous
            vous sentez à l'aise, nous vous recommandons de changer d'environnement
            en marchant un peu, puis vous pourrez démarrer la leçon !
          </p>
          <DistanceLecon1
            exercice={{}}
            lorsDistanceCalculee={gererDistanceCalculee}
            lorsErreurPosition={(erreur) =>
              console.log("Erreur de position :", erreur)
            }
          />
        </>
      ) : leconId === 2 ? (
        <>
         <p className="entrainement-texte">
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
        </>
      ) : (
        <p className="entrainement-texte">Entraînement non disponible pour cette leçon.</p>
      )}

      {distance !== null && (
        <div className="resultat-entrainement">
          <div className="resultat-entrainement-titre">
            {leconId === 1
              ? "La distance que vous avez parcourue est de"
              : "La distance entre votre position et le point sélectionné est de"}
          </div>
          <div className="resultat-entrainement-valeur">{Math.round(distance)} mètres</div>
        </div>
      )}
    </div>
  );
};

export default Entrainement;
