import React from "react";
import SaisieEstimation from "./SaisieEstimation";
import BoutonAction from "./BoutonAction";

class FormEstimation extends React.Component {
  render() {
    const { estimation, setEstimation, isTracking, onValidate } = this.props;

    return (
      <div>
        <SaisieEstimation
          value={estimation}
          onChange={(e) => setEstimation(Number(e.target.value))}
          placeholder="Estimez la distance en mètres"
          disabled={isTracking}
        />
        <BoutonAction
          texte="Valider"
          onClick={onValidate} // Appel de la fonction pour valider l'estimation
        />
      </div>
    );
  }
}

export default FormEstimation;
