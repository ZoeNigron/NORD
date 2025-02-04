import React, { useState } from "react";
//import BoutonAction from "../BoutonAction/BoutonAction";
import "./FormEstimation.css";

const FormEstimation = ({ estimation, setEstimation, onValidate }) => {
  const [erreur, setErreur] = useState("");

  const handleChange = (e) => {
    const valeur = e.target.value;
    if (/^\d*$/.test(valeur)) {
      setEstimation(Number(valeur));
      setErreur("");
    } else {
      setErreur("Veuillez entrer un nombre valide.");
    }
  };

  return (
    <div className="form-estimation">
      <input
        type="text"
        value={estimation}
        onChange={handleChange}
        placeholder="Estimez la distance en mètres"
        className="estimation-input"
      />
      {erreur && <p className="erreur-message">{erreur}</p>}
      <button onClick={onValidate} className="valider-button">Valider</button>
    </div>
  );
};

export default FormEstimation;
