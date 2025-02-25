import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import modeAudio from "../../services/fonctions/modeAudio";
import "./BoutonAudio.css";

function BoutonAudio({ texte }) {
  // prop qui contient le texte à lire
  const [audioActive, setAudioActive] = useState(false);

  const audio = () => {
    // bouton audio : on utilise l'API speechSynthesis du navigateur
    setAudioActive(!audioActive); // Si true, on passe à false (arrêt du son)
    // Si false, on passe à true (lancement du son)
    if (audioActive) {
      window.speechSynthesis.cancel(); // Si audioActive était déjà true, on arrête la lecture
    } else {
      modeAudio(texte); // Sinon, on lance la lecture
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
