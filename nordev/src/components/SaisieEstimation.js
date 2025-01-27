// Composant pour les champs de saisie
import React from "react";

class SaisieEstimation extends React.Component {
  render() {
    const { value, onChange, placeholder, disabled } = this.props;
    return (
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  }
}

export default SaisieEstimation;