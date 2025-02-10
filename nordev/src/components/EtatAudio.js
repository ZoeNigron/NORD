import React, { createContext, useState, useContext } from "react";

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const toggleAudio = () => {
    setIsAudioEnabled((prev) => !prev);
  };

  return (
    <AudioContext.Provider value={{ isAudioEnabled, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
