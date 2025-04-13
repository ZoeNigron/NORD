// Ce composant permet de calculer la distance entre la position actuelle de l'utilisateur et un point sélectionné sur une carte
// En entrée, il prend une prop : "distance calculée" (fonction) qui est appelée après le calcul de la distance
// En sortie, on a l'affichage de la carte avec la position de l'utilisateur et le point sélectionné (et l'affichage d'un message d'erreur en cas de problème avec la localisation)

import { useState, useEffect } from "react";
import Carte from "../Carte/Carte";
import PositionUtilisateur from "../PositionUtilisateur";
import PointSelectionne from "../PointSelectionne";
import CalculDistance from "../CalculDistance";
import "./DistanceLecon.css";

function DistanceLecon2({ distanceCalculee }) {
  const [positionActuelle, setPositionActuelle] = useState(null);
  const [positionCliquee, setPositionCliquee] = useState(null);
  const [erreurPosition, setErreurPosition] = useState(null);

  useEffect(() => {
    if (!positionActuelle) {
      const timer = setTimeout(() => {
        setErreurPosition(
          "Impossible de récupérer votre position. Veuillez vérifier vos paramètres de localisation."
        );
      }, 5000); // si la position n'est pas récupérée au bout de 5 secondes, on affiche le message d'erreur

      return () => clearTimeout(timer);
    } else {
      setErreurPosition(null);
    }
  }, [positionActuelle]);

  return (
    <div>
      {erreurPosition && (
        <div className="erreur-position">{erreurPosition}</div>
      )}

      <Carte
        contenu={
          <>
            <PositionUtilisateur
              positionTrouvee={setPositionActuelle} // on capture la position actuelle de l'utilisateur
            />
            {/* pour que l'utilisateur choisisse un point sur la carte */}
            <PointSelectionne positionTrouvee={setPositionCliquee} />
          </>
        }
      />

      {positionActuelle && positionCliquee && !erreurPosition && (
        <CalculDistance
          point1={[positionActuelle[0], positionActuelle[1]]} // [latitude, longitude]
          point2={[positionCliquee[0], positionCliquee[1]]}
          mettreAJourDistance={distanceCalculee}
        />
      )}
    </div>
  );
}

export default DistanceLecon2;
