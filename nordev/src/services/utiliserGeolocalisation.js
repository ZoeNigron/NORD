import { useState, useEffect } from "react";

const useGeolocalisation = () => {
  const [startCoords, setStartCoords] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setStartCoords({ latitude, longitude });
      },
      (error) => {
        setMessage(`Erreur : ${error.message}`);
      }
    );
  }, []);

  return { startCoords, setStartCoords, message, setMessage };
};

export default useGeolocalisation;
