// Cette page permet à l'utilisateur de consulter les astuces qui existent, après avoir cliqué sur le bouton dédié à cela sur la page d'accueil

import React from "react";
import Entete from "../components/Entete/Entete";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import GestionAstuces from "../components/GestionAstuces/GestionAstuces";

function Astuces() {
  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Mes astuces"
        texteAudio="Bienvenue dans la section astuces. Voici des astuces utiles pour améliorer le sens de l'orientation."
      />
      <GestionAstuces />
    </div>
  );
}

export default Astuces;
