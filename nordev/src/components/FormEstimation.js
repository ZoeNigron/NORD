import React, { useState } from "react";
import BoutonAction from "./BoutonAction";

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
      />
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
      <BoutonAction texte="Valider" onClick={onValidate} />
    </div>
  );
};

export default FormEstimation;
