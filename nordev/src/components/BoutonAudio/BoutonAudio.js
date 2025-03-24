import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import modeAudio from "../../services/fonctions/modeAudio";
import "./BoutonAudio.css";

function BoutonAudio({ texte }) {
  const [audioActive, setAudioActive] = useState(false);

  const audio = () => {
    if (audioActive) {
      window.speechSynthesis.cancel(); // Arrêter l'audio en cours
      setAudioActive(false); // Désactivation du bouton actif
    } else {
      modeAudio(texte); // Démarrage du texte audio
      setAudioActive(true); // Activation du bouton actif

      // Éviter que l'état "actif" reste bloqué même après la fin du texte
      const synthese = window.speechSynthesis;
      synthese.onend = () => setAudioActive(false);
    }
  };

  return (
    <button
      onClick={audio}
      className={`audio-button ${audioActive ? "active" : ""}`}
    >
      {audioActive ? (
        <FaVolumeMute className="audio-on" />
      ) : (
        <FaVolumeUp className="audio-off" />
      )}
    </button>
  );
}

export default BoutonAudio;
