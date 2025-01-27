// Composant pour le formulaire d'estimation
import React from "react";
import SaisieEstimation from "./SaisieEstimation";
import BoutonAction from "./BoutonAction";

class FormEstimation extends React.Component {
  render() {
    const { estimation, setEstimation, isTracking, toggleTracking } = this.props;
    return (
      <div>
        <SaisieEstimation
          value={estimation}
          onChange={(e) => setEstimation(Number(e.target.value))}
          placeholder="Estimez la distance en mètres"
          disabled={isTracking}
        />
        <BoutonAction
          onClick={toggleTracking}
          texte={isTracking ? "Terminer" : "Démarrer"}
        />
      </div>
    );
  }
}

export default FormEstimation;
