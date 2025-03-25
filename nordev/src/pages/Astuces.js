import React from "react";
import Entete from "../components/Entete/Entete";
import BarreNavig from "../components/Navigation/BarreNavig";
import GestionAstuces from "../components/GestionAstuces/GestionAstuces";

function Astuces() {
  const texteAudio = "Bienvenue dans la section astuces. Voici les astuces que l'ensemble des utilisateurs trouve utiles pour améliorer le sens de l'orientation.";

  return (
    <div>
      <Entete />
      <BarreNavig 
        title="Mes astuces"
        texteAudio={texteAudio}
      />
      <GestionAstuces />
    </div>
  );
}

export default Astuces;
