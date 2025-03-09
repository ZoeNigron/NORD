import { useState, useEffect } from "react";
import Carte from "../Carte/Carte";
import PositionUtilisateur from "../PositionUtilisateur";
import PointSelectionne from "../PointSelectionne";
import CalculDistance from "../CalculDistance/CalculDistance";
import "./DistanceLecon.css";

function DistanceLecon2({ distanceCalculee }) {
  const [positionActuelle, setPositionActuelle] = useState(null);
  const [positionCliquee, setPositionCliquee] = useState(null);
  const [afficherMessageErreur, setAfficherMessageErreur] = useState(false);

  useEffect(() => {
    if (!positionActuelle) {
      const timer = setTimeout(() => {
        setAfficherMessageErreur(true);
      }, 3000); // 3 secondes

      return () => clearTimeout(timer);
    } else {
      setAfficherMessageErreur(false); 
    }
  }, [positionActuelle]);

  return (
    <div>
      <Carte>
        <PositionUtilisateur positionTrouvee={setPositionActuelle} />
        <PointSelectionne positionTrouvee={setPositionCliquee} />
      </Carte>

      {afficherMessageErreur && (
        <div className="erreur-position">
          Impossible de récupérer votre position. Veuillez vérifier les paramètres de localisation de votre appareil.
        </div>
      )}

      {positionActuelle && positionCliquee && !afficherMessageErreur && (
        <CalculDistance
          point1={[positionActuelle[0], positionActuelle[1]]} // [latitude, longitude]
          point2={[positionCliquee[0], positionCliquee[1]]}
          setDistance={distanceCalculee}
        />
      )}
    </div>
  );
}

export default DistanceLecon2;
