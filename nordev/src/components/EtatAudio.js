import React, { createContext, useState, useContext } from "react";

const AudioContext = createContext(); // on crée un contexte pour gérer l'état de l'audio

export const useAudio = () => {
  return useContext(AudioContext); // on utilise le contexte Audio pour fournir l'état et la fonction
};

export const FournisseurAudio = ({ children }) => {
  const [audioActive, setAudioActive] = useState(false);

  const gererAudio = () => { // pour basculer l'état de l'audio (activé ou désactivé)
    setAudioActive((prev) => !prev);
  };

  return (
    // pour fournir l'état audio et la fonction de gestion de l'audio aux enfants
    <AudioContext.Provider value={{ audioActive, gererAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
