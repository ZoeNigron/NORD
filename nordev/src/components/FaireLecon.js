import React from "react";
import { useParams } from "react-router-dom";
import FormEstimation from "./FormEstimation";
import Info from "./Info";
import Carte from "./Carte";
import AnalyseEstimation from "./AnalyseEstimation";
import utiliserGeolocalisation from "../services/utiliserGeolocalisation";
import utiliserTracking from "../services/utiliserTracking";

const FaireLecon = () => {
  const { id } = useParams();
  const { startCoords, setStartCoords, message, setMessage } = utiliserGeolocalisation();
  const { estimation, setEstimation, distanceCovered, toggleTracking, isTracking } =
    utiliserTracking(startCoords, setStartCoords, setMessage);

  if (!startCoords) {
    return <p>Chargement de votre position...</p>;
  }

  return (
    <div>
      <h2>Leçon {id}</h2>
      <FormEstimation
        estimation={estimation}
        setEstimation={setEstimation}
        isTracking={isTracking}
        toggleTracking={toggleTracking}
      />
      {distanceCovered > 0 && (
        <AnalyseEstimation distance={distanceCovered} estimation={estimation} />
      )}
      <Info message={message} distanceCovered={distanceCovered} />
      <Carte startCoords={startCoords} />
    </div>
  );
};

export default FaireLecon;
