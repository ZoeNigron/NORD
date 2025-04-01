// Ce composant calcule la distance entre deux points géographiques
// En entrée, il prend deux points sous forme de tableaux [latitude, longitude] (point1 et point2) et une fonction mettreAJourDistance
// En sortie, il ne retourne rien, mais il met à jour la distance calculée dans le parent

import { useEffect } from "react";

function CalculDistance({ point1, point2, mettreAJourDistance }) {
  const calculerDistance = (lat1, lon1, lat2, lon2) => {
    // fonction pour calculer la distance entre deux points géographiques

    const R = 6371e3; // rayon moyen de la Terre en mètres (6371 km convertis en mètres, utilisé pour la conversion des angles en distances réelles)

    const φ1 = (lat1 * Math.PI) / 180; // latitude du premier point convertie en radians
    const φ2 = (lat2 * Math.PI) / 180; // de même pour le deuxième point

    const Δφ = ((lat2 - lat1) * Math.PI) / 180; // différence entre les latitudes (en degrés) convertie en radians

    const Δλ = ((lon2 - lon1) * Math.PI) / 180; // de même pour les longitudes

    // Calcul de la formule de Haversine pour la distance entre deux points sur la surface de la Terre
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + // calcul de la composante sinus de la différence de latitude
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2); // calcul de la composante sinus de la différence de longitude

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Utilisation de l'arc tangente pour le calcul de l'angle central (en radians) entre les deux points

    return R * c; // distance en mètres entre les deux points
  };

  useEffect(() => {
    if (point1 && point2) {
      const [lat1, lon1] = point1;
      const [lat2, lon2] = point2;
      const distance = calculerDistance(lat1, lon1, lat2, lon2);
      mettreAJourDistance(distance); // passage de la distance calculée au parent
    }
  }, [point1, point2, mettreAJourDistance]);

  return null;
}

export default CalculDistance;
