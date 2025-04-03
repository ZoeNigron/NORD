// Ce composant permet à l'utilisateur de consulter les différentes astuces que l'on récupère depuis l'API
// En sortie, il affiche la liste de ces astuces qui sont ajoutables, modifiables et supprimables depuis le Swagger

import React, { useState, useEffect } from "react";
import { obtenirAstuces } from "../../api";
import "./GestionAstuces.css";
import { List, ListItem } from "@mui/material";

function GestionAstuces() {
  const [astuces, setAstuces] = useState([]);

  useEffect(() => {
    const chargerAstuces = async () => {
      const data = await obtenirAstuces(); // on récupère les astuces depuis l'API
      setAstuces(data);
    };
    chargerAstuces();
  }, []);

  return (
    <div className="gestion-astuces-contenu">
      <h2>Liste des astuces</h2>
      <List>
        {astuces.map((astuce) => (
          <ListItem key={astuce.id} className="item-astuce">
            {astuce.contenu}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default GestionAstuces;
