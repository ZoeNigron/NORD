import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import modeAudio from "../services/modeAudio";

function BoutonAudio ({ texte }) {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    if (isAudioEnabled) {
      window.speechSynthesis.cancel(); // Arrêter la lecture si elle est déjà en cours
    } else {
      modeAudio(texte); // Lire le texte si l'audio est activé
    }
  };

  return (
    <button onClick={toggleAudio} className="audio-button">
      {isAudioEnabled ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
};

export default BoutonAudio;