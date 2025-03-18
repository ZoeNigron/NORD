import { useEffect, useState } from "react";
import { obtenirAstuces } from "../../api";

function AstuceDuJour() {
  const [astuceDuJour, setAstuceDuJour] = useState("");
  
  useEffect(() => {
    const fetchAstuces = async () => {
      try {
        const astuces = await obtenirAstuces();  // Appel de l'API pour récupérer les astuces
        if (astuces && astuces.length > 0) {
          const dateDepart = new Date(2025, 0, 1);  // date de référence
          const aujourdhui = new Date();  // date et heure d'aujourd'hui
          const differenceJours = Math.floor(
            (aujourdhui - dateDepart) / (1000 * 60 * 60 * 24)
          ); // retourne la différence en millisecondes donc on divise par le nombre qui correspond à un jour en millisecondes
          setAstuceDuJour(astuces[differenceJours % astuces.length].contenu);  // Calcul et mise à jour de l'astuce du jour
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des astuces :", error);
      }
    };

    fetchAstuces();
  }, []);

  return astuceDuJour;
}

export default AstuceDuJour;
