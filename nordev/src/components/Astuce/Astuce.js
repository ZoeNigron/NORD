// Ce composant affiche l'astuce du jour (aléatoirement selon la date) en récupérant les astuces via l'API
// En sortie, ce composant renvoie un affichage de l'astuce du jour et un bouton permettant de rediriger l'utilisateur vers la page pour lire les autres astuces

import React, { useEffect, useState } from "react";
import "./Astuce.css";
import { LightbulbOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { obtenirAstuces } from "../../services/api";

function Astuce() {
  const [astuceDuJour, setAstuceDuJour] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAstuces = async () => {
      try {
        const astuces = await obtenirAstuces(); // on appelle l'API pour récupérer les astuces
        if (astuces && astuces.length > 0) {
          const dateDepart = new Date(2025, 0, 1); // date de référence
          const aujourdhui = new Date(); // date et heure d'aujourd'hui
          const differenceJours = Math.floor(
            (aujourdhui - dateDepart) / (1000 * 60 * 60 * 24)
          ); // retourne la différence en millisecondes donc on divise par le nombre qui correspond à un jour en millisecondes
          setAstuceDuJour(astuces[differenceJours % astuces.length].contenu); // on calcule et on met à jour l'astuce du jour
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des astuces :", error);
      }
    };

    fetchAstuces();
  }, []);

  return (
    <div className="astuce">
      <div className="astuce-entete">L'astuce du jour</div>
      <div className="astuce-contenu">
        <LightbulbOutlined fontSize="large" className="astuce-icone" />
        <p className="astuce-texte">{astuceDuJour}</p>
      </div>

      <button
        className="bouton-gestion-astuce"
        onClick={() => navigate("/mes-astuces")}
      >
        Découvrir les autres astuces
      </button>
    </div>
  );
}

export default Astuce;
