// Ce composant permet à l'utilisateur d'activer ou de désactiver la lecture audio du texte donné
// En entrée, le composant prend une prop "texte" (string) qui est le contenu à lire à haute voix
// En sortie, il affiche un bouton permettant de démarrer ou d'arrêter la lecture audio, avec un changement d'icône pour signaler l'état

import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import modeAudio from "../../services/modeAudio";
import "./BoutonAudio.css";

function BoutonAudio({ texte }) {
  const [audioActive, setAudioActive] = useState(false);

  const audio = () => {
    if (audioActive) {
      window.speechSynthesis.cancel(); // pour arrêter l'audio en cours
      setAudioActive(false); // désactivation du bouton actif
    } else {
      modeAudio(texte); // démarrage du texte audio
      setAudioActive(true); // activation du bouton actif

      const synthese = window.speechSynthesis;
      synthese.onend = () => setAudioActive(false); // pour éviter que l'état "actif" reste bloqué après la fin du texte
    }
  };

  return (
    <button
      onClick={audio}
      className={`bouton-audio ${audioActive ? "active" : ""}`}
    >
      {audioActive ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
}

export default BoutonAudio;
