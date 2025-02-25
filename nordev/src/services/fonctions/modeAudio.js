function modeAudio (texte) {
    if ('speechSynthesis' in window) { // on vérifie si le navigateur prend en charge la synthèse vocale
      const parole = new SpeechSynthesisUtterance(texte); // convertit le texte en parole
      parole.lang = 'fr-FR';  // Langue française
      parole.rate = 1; // Vitesse de lecture normale
      parole.pitch = 1; // Tonalité neutre
      window.speechSynthesis.speak(parole); // on démarre la lecture
    } else {
      alert("La synthèse vocale n'est pas supportée par ce navigateur.");
    }
  };

export default modeAudio;
  