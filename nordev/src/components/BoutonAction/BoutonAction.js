import React from "react";
import "./BoutonAction.css";

function BoutonAction ({ onClick, texte }) {
  return (
    <button className="bouton-action" onClick={onClick}>
      {texte}
    </button>
  );
};

export default BoutonAction;
