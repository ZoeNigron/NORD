import React, { useEffect } from "react";

function AnalyseEstimation({ distance, estimation }) {
  const roundedDistance = Math.floor(distance / 5) * 5;    // Arrondi à un multiple de 5
  const difference = Math.abs(roundedDistance - estimation); 

  let message = "";
  let messageStyle = {};

  // Détermination du message selon la précision de l'estimation
  if (difference <= 10) {
    message = "Bravo ! Vous avez estimé la distance correctement.";
    messageStyle = { color: "green" };
  } else if (roundedDistance > estimation) {
    message = "Votre estimation est trop courte !";
    messageStyle = { color: "red" };
  } else {
    message = "Votre estimation est trop longue !";
    messageStyle = { color: "red" };
  }

  // Affichage automatique d'un pop-up avec le message
  useEffect(() => {
    alert(message);
  }, [message]);

  return (
    <div style={{ fontWeight: "bold", marginTop: "10px" }}>
      <p>
        <strong>Distance réelle :</strong> {roundedDistance} mètres
      </p>
      <p style={messageStyle}>{message}</p>
    </div>
  );
}

export default AnalyseEstimation;
