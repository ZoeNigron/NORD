import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import modeAudio from "../../services/modeAudio";
import "./BoutonAudio.css";

function BoutonAudio({ texte }) {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    if (isAudioEnabled) {
      window.speechSynthesis.cancel(); // Arrêter la lecture si activée
    } else {
      modeAudio(texte); // Lire le texte
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className={`audio-button ${isAudioEnabled ? "active" : ""}`}
    >
      {isAudioEnabled ? (
        <FaVolumeMute className="audio-on" />
      ) : (
        <FaVolumeUp className="audio-off" />
      )}
    </button>
  );
}

export default BoutonAudio;
