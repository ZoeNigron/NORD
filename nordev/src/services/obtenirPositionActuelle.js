const obtenirPositionActuelle = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("La géolocalisation n'est pas prise en charge par ce navigateur."));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve([latitude, longitude]);
          },
          (error) => {
            reject(new Error(`Erreur de géolocalisation : ${error.message}`));
          },
          { enableHighAccuracy: true }
        );
      }
    });
  };
  
  export default obtenirPositionActuelle;

  
  