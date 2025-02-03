import React, { useState, useEffect } from "react";
import calculerDistance from "../../services/calculerDistance";
import "./CalculDistance.css";

function CalculDistance({ point1, point2, setDistance }) {
  // point1 et point2 sous forme de tableaux [latitude, longitude] passés depuis composant parent
  const [distance, setLocalDistance] = useState(null);

  useEffect(() => {
    // calcul de la distance à chaque fois que les coordonnées de l'un ou l'autre des points changent
    if (point1 && point2) {
      const [lat1, lon1] = point1;
      const [lat2, lon2] = point2;
      const dist = calculerDistance(lat1, lon1, lat2, lon2);
      setLocalDistance(dist); // on met à jour l'état local pour l'affichage
      setDistance(dist); // on passe la distance au parent via setDistance
    }
  }, [point1, point2, setDistance]);

  return (
    <div className="calcul-distance-container">
      {distance !== null ? (
        <p>
          La distance entre les deux points est {Math.round(distance)} mètres
        </p> // distance arrondie à l'entier le plus proche
      ) : (
        <p>Calcul de la distance...</p>
      )}
    </div>
  );
}

export default CalculDistance;



