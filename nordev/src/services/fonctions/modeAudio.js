function modeAudio(texte) {
  if ('speechSynthesis' in window) {
      // Annule toute lecture en cours avant d'en lancer une nouvelle
      window.speechSynthesis.cancel();

      const parole = new SpeechSynthesisUtterance(texte);
      parole.lang = 'fr-FR';
      parole.rate = 1;
      parole.pitch = 1;

      window.speechSynthesis.speak(parole); // Démarrage de la lecture
  } else {
      alert("La synthèse vocale n'est pas supportée par ce navigateur.");
  }
}

export default modeAudio;
