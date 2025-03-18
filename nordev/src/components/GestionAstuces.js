import React, { useState, useEffect } from "react";
import {
  obtenirAstuces,
  ajouterAstuce,
  modifierAstuce,
  supprimerAstuce,
} from "../api";

import "./GestionAstuces.css";
import { Button, TextField, List, ListItem, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

function GestionAstuces() {
  const [astuces, setAstuces] = useState([]);
  const [nouvelleAstuce, setNouvelleAstuce] = useState("");
  const [modificationId, setModificationId] = useState(null);
  const [contenuModification, setContenuModification] = useState("");

  // Charger les astuces depuis l'API
  useEffect(() => {
    const chargerAstuces = async () => {
      const data = await obtenirAstuces();
      setAstuces(data);
    };
    chargerAstuces();
  }, []);

  // Ajouter une nouvelle astuce
  const handleAjouterAstuce = async () => {
    if (nouvelleAstuce.trim() !== "") {
      const nouvelle = await ajouterAstuce({ contenu: nouvelleAstuce });
      setAstuces([...astuces, nouvelle]);
      setNouvelleAstuce("");
    }
  };

  // Supprimer une astuce
  const handleSupprimerAstuce = async (id) => {
    await supprimerAstuce(id);
    setAstuces(astuces.filter((astuce) => astuce.id !== id));
  };

  // Modifier une astuce
  const handleModifierAstuce = async (id) => {
    const astuceModifiee = await modifierAstuce(id, {
      contenu: contenuModification,
    });
    setAstuces(astuces.map((a) => (a.id === id ? astuceModifiee : a)));
    setModificationId(null);
    setContenuModification("");
  };

  return (
    <div className="gestion-astuces-container">
      <h2>Gestion des Astuces</h2>

      {/* Formulaire d'ajout */}
      <div className="ajout-astuce">
        <TextField
          label="Nouvelle astuce"
          value={nouvelleAstuce}
          onChange={(e) => setNouvelleAstuce(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAjouterAstuce}>
          Ajouter
        </Button>
      </div>

      {/* Liste des astuces */}
      <List>
        {astuces.map((astuce) => (
          <ListItem key={astuce.id} className="astuce-item">
            {modificationId === astuce.id ? (
              <>
                <TextField
                  value={contenuModification}
                  onChange={(e) => setContenuModification(e.target.value)}
                />
                <Button
                  onClick={() => handleModifierAstuce(astuce.id)}
                  color="success"
                  variant="contained"
                >
                  Confirmer
                </Button>
              </>
            ) : (
              <>
                <span>{astuce.contenu}</span>
                <IconButton
                  color="primary"
                  onClick={() => {
                    setModificationId(astuce.id);
                    setContenuModification(astuce.contenu);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleSupprimerAstuce(astuce.id)}
                >
                  <Delete />
                </IconButton>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default GestionAstuces;
