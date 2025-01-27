import { useState } from "react";
import calculerDistance from "../services/calculerDistance";

const useTracking = (startCoords, setStartCoords, setMessage) => {
  const [estimation, setEstimation] = useState("");
  const [distanceCovered, setDistanceCovered] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  const toggleTracking = () => {
    if (!isTracking) {
      setMessage("Suivi démarré...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setStartCoords({ latitude, longitude });
          setDistanceCovered(0);
          setMessage("Position initiale enregistrée !");
        },
        (error) => {
          setMessage(`Erreur : ${error.message}`);
        }
      );
    } else {
      if (!startCoords) {
        setMessage("Veuillez démarrer le suivi d'abord !");
        return;
      }

      setMessage("Calcul de la distance en cours...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const distance = calculerDistance(
            startCoords.latitude,
            startCoords.longitude,
            latitude,
            longitude
          );
          setDistanceCovered(distance);
        },
        (error) => {
          setMessage(`Erreur : ${error.message}`);
        }
      );
    }

    setIsTracking(!isTracking);
  };

  return { estimation, setEstimation, distanceCovered, toggleTracking, isTracking };
};

export default useTracking;
