// Composant pour les boutons d'action
import React from "react";

class BoutonAction extends React.Component {
  render() {
    const { onClick, texte } = this.props;
    return <button onClick={onClick}>{texte}</button>;
  }
}

export default BoutonAction;