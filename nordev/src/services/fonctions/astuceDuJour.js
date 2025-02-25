import astuces from "../donnees/astuces";

function astuceDuJour() {
  const dateDepart = new Date(2025, 0, 1); // date de référence
  const aujourdhui = new Date(); // date et heure d'aujourd'hui
  const differenceJours = Math.floor(
    (aujourdhui - dateDepart) / (1000 * 60 * 60 * 24)
  ); // retourne la différence en millisecondes donc on divise par le nombre qui correspond à un jour en millisecondes
  return astuces[differenceJours % astuces.length];
  // modulo pour s'assurer que l'index reste dans les limites du tableau
}

export default astuceDuJour;
