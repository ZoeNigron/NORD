import React, { useState } from "react";
import "./FormEstimation.css";

const FormEstimation = ({
  estimation,
  miseAJourEstimation,
  gererValidation,
}) => {
  const [erreur, setErreur] = useState("");

  const gererSaisie = (e) => {
    const valeur = e.target.value;

    // on vérifie si la valeur est un entier positif ou égal à zéro
    if (
      valeur === "" ||
      (Number.isInteger(Number(valeur)) && Number(valeur) >= 0)
    ) {
      miseAJourEstimation(Number(valeur)); // on met à jour l'estimation
      setErreur(""); // on réinitialise l'erreur
    } else {
      setErreur("Veuillez entrer un nombre entier positif ou zéro.");
    }
  };

  return (
    <div className="formulaire-estimation">
      <input
        type="text"
        value={estimation}
        onChange={gererSaisie}
        placeholder="Estimez la distance en mètres"
        className="saisie-estimation"
      />
      {erreur && <p className="message-erreur">{erreur}</p>}
      <button onClick={gererValidation} className="bouton-valider">
        Valider
      </button>
    </div>
  );
};

export default FormEstimation;
