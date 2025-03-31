import React, { useState, useEffect } from "react";
import { obtenirAstuces } from "../../api";
import "./GestionAstuces.css";
import { List, ListItem } from "@mui/material";

function GestionAstuces() {
  const [astuces, setAstuces] = useState([]);

  useEffect(() => {
    const chargerAstuces = async () => {
      const data = await obtenirAstuces();
      setAstuces(data);
    };
    chargerAstuces();
  }, []);

  return (
    <div className="gestion-astuces-container">
      <h2>Liste des astuces</h2>
      <List>
        {astuces.map((astuce) => (
          <ListItem key={astuce.id} className="astuce-item">
            {astuce.contenu}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default GestionAstuces;
