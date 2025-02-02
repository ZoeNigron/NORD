import React, { useState, useEffect } from "react";
import calculerDistance from "../services/calculerDistance";
import './CalculDistance.css'; // Import du fichier CSS

const CalculDistance = ({ point1, point2 }) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (point1 && point2) {
      const [lat1, lon1] = point1;
      const [lat2, lon2] = point2;
      const dist = calculerDistance(lat1, lon1, lat2, lon2);
      setDistance(dist); // Distance en mètres
    }
  }, [point1, point2]);

  return (
    <div className="calcul-distance-container">
      {distance !== null ? (
        <p>La distance entre les deux points est {distance.toFixed(2)} mètres</p>
      ) : (
        <p>Calcul de la distance...</p>
      )}
    </div>
  );
};

export default CalculDistance;
