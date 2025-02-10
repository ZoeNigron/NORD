function modeAudio (text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';  // Langue française
      utterance.rate = 1; // Vitesse de lecture (1 est la vitesse normale)
      utterance.pitch = 1; // Tonalité (1 est neutre)
      window.speechSynthesis.speak(utterance); // Démarre la lecture
    } else {
      alert("La synthèse vocale n'est pas supportée par ce navigateur.");
    }
  };

export default modeAudio;
  