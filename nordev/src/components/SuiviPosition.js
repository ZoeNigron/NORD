import React, { useState, useEffect } from "react";

const SuiviPosition = ({ setPosition }) => {
  const [positionActuelle, setPositionActuelle] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const nouvellePosition = [position.coords.latitude, position.coords.longitude];
        setPositionActuelle(nouvellePosition);
        setPosition(nouvellePosition);  // Met à jour la position dans le composant parent (Entrainement)
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
    );

    // Nettoyage du watch au démontage du composant
    return () => navigator.geolocation.clearWatch(watchId);
  }, [setPosition]);

  return null;  // Ce composant ne retourne rien de visible mais effectue l'écoute de la position
};

export default SuiviPosition;
