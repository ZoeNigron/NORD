import React, { useEffect } from "react";
import Entete from "../components/Entete/Entete";
import BarreNavig from "../components/Navigation/BarreNavig";
import GestionAstuces from "../components/GestionAstuces/GestionAstuces";
import modeAudio from "../services/fonctions/modeAudio";
import BoutonAudio from "../components/BoutonAudio/BoutonAudio";

function Astuces() {
  useEffect(() => {
    modeAudio("Bienvenue dans la section astuces. Écoutez attentivement pour progresser.");
  }, []);

  return (
    <div>
      <Entete />
      <BarreNavig title="Mes astuces" homeLink="/" />
      <BoutonAudio texte="Bienvenue dans la section astuces. Écoutez attentivement pour progresser." />
      <GestionAstuces />
    </div>
  );
}

export default Astuces;
