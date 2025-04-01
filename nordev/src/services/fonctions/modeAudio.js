// Cette fonction permet de lire le texte à haute voix via la synthèse vocale du navigateur
// En entrée, elle prend une prop "texte" (string)
// En sortie, elle ne retourne aucune valeur mais elle déclenche la lecture à voix haute du texte

function modeAudio(texte) {
  if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // pour annuler toute lecture en cours avant d'en lancer une nouvelle

      const parole = new SpeechSynthesisUtterance(texte); // on crée une instance de SpeechSynthesisUtterance pour lui donner le texte à lire
      parole.lang = 'fr-FR'; // langue française
      parole.rate = 1; // vitesse de lecture
      parole.pitch = 1; // tonalité

      window.speechSynthesis.speak(parole); // démarrage de la lecture
  } else {
      alert("La synthèse vocale n'est pas supportée par ce navigateur.");
  }
}

export default modeAudio;
