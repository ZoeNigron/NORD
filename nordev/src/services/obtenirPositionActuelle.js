// Cette fonction sert à obtenir la position géographique actuelle de l'utilisateur en utilisant l'API de géolocalisation du navigateur. Elle retourne une promesse qui sera résolue avec la latitude et la longitude de l'utilisateur, ou rejetée en cas d'erreur (par exemple, si la géolocalisation n'est pas disponible ou si l'utilisateur refuse de partager sa position)

const obtenirPositionActuelle = () => {
  return new Promise((resolve, reject) => { // on retourne une promesse qui sera résolue ou rejetée en fonction du résultat
    
    if (!navigator.geolocation) { // on vérifie si le navigateur supporte la géolocalisation
      reject(new Error("La géolocalisation n'est pas prise en charge par ce navigateur."));
    } else {
      // si la géolocalisation est disponible, on tente de récupérer la position de l'utilisateur
      navigator.geolocation.getCurrentPosition(
        (position) => { // fonction appelée si la géolocalisation fonctionne
          const { latitude, longitude } = position.coords; // on extrait la latitude et la longitude de la position
          resolve([latitude, longitude]); // on résout la promesse avec un tableau contenant la latitude et la longitude
        },
        (error) => { // fonction appelée si la géolocalisation échoue
          reject(new Error(`Erreur de géolocalisation : ${error.message}`)); // on rejette la promesse avec un message d'erreur
        },
        { enableHighAccuracy: true } // pour activer une précision élevée
      );
    }
  });
};

export default obtenirPositionActuelle;
