import React from "react";
import "./BoutonAction.css";

class BoutonAction extends React.Component {
  render() {
    const { onClick, texte } = this.props;
    return (
      <button className="bouton-action" onClick={onClick}>
        {texte}
      </button>
    );
  }
}

export default BoutonAction;
