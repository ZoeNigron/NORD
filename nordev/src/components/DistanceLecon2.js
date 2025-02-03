import { useState, useEffect } from "react";
import Carte from "./Carte/Carte";
import PositionUtilisateur from "./PositionUtilisateur";
import PointSelectionne from "./PointSelectionne";
import CalculDistance from "./CalculDistance/CalculDistance";

function DistanceLecon2({ distanceCalculee }) {
  const [positionActuelle, setPositionActuelle] = useState(null);
  const [positionCliquee, setPositionCliquee] = useState(null);

  useEffect(() => {
    console.log("Position actuelle mise à jour:", positionActuelle);
    console.log("Position cliquée mise à jour:", positionCliquee);
  }, [positionActuelle, positionCliquee]);

  return (
    <div>
      <Carte>
        <PositionUtilisateur positionTrouvee={setPositionActuelle} />
        <PointSelectionne positionTrouvee={setPositionCliquee} />
      </Carte>

      {positionActuelle && positionCliquee && (
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
