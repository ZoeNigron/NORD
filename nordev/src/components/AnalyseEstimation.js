import React from "react";

function AnalyseEstimation({ distance, estimation }) {
  const roundedDistance = Math.floor(distance / 5) * 5;

  let message = "";
  if (Math.abs(roundedDistance - estimation) <= 10) {
    message = "Bravo ! Vous avez estimé la distance correctement.";
  } else if (roundedDistance > estimation) {
    message = "Votre estimation est trop courte !";
  } else {
    message = "Votre estimation est trop longue !";
  }

  return (
    <div style={{ fontWeight: "bold", marginTop: "10px" }}>
      <p>
        <strong>Distance réelle :</strong> {roundedDistance} mètres
      </p>
      <p style={{ color: message.includes("Bravo") ? "green" : "red" }}>{message}</p>
    </div>
  );
}

export default AnalyseEstimation;
