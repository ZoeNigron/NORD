import React, { useState, useEffect } from "react";
import {
  obtenirAstuces,
  ajouterAstuce,
  modifierAstuce,
  supprimerAstuce,
} from "../../api";

import "./GestionAstuces.css";
import { Button, TextField, List, ListItem, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

function GestionAstuces() {
  const [astuces, setAstuces] = useState([]);
  const [nouvelleAstuce, setNouvelleAstuce] = useState("");
  const [modificationId, setModificationId] = useState(null);
  const [contenuModification, setContenuModification] = useState("");
  const userId = localStorage.getItem("utilisateurId"); // Récupération de l'ID de l'utilisateur connecté

  // Charger les astuces de l'utilisateur connecté
  useEffect(() => {
    const chargerAstuces = async () => {
      if (userId) {
        const data = await obtenirAstuces(); // Cette fonction va maintenant récupérer uniquement les astuces de l'utilisateur
        setAstuces(data);
      }
    };
    chargerAstuces();
  }, [userId]);

  // Ajouter une nouvelle astuce
  const gererAjouterAstuce = async () => {
    if (nouvelleAstuce.trim() !== "") {
      const nouvelle = await ajouterAstuce({ contenu: nouvelleAstuce });
      setAstuces([...astuces, nouvelle]);
      setNouvelleAstuce("");
    }
  };

  // Supprimer une astuce
  const gererSupprimerAstuce = async (id) => {
    await supprimerAstuce(id);
    setAstuces(astuces.filter((astuce) => astuce.id !== id));
  };

  // Modifier une astuce
  const gererModifierAstuce = async (id) => {
    // on sauvegarde l'état actuel des astuces au cas où la modification échoue
    const ancienneAstuce = [...astuces];

    setAstuces(
      astuces.map(
        (a) => (a.id === id ? { ...a, contenu: contenuModification } : a) // on met à jour directement l'élément modifié
      )
    );

    try {
      // on appel l'API pour valider la modification côté serveur
      await modifierAstuce(id, contenuModification);

      // si l'appel réussit, les données sont déjà à jour
    } catch (error) {
      // en cas d'erreur, on affiche un message
      alert("Erreur lors de la modification, annulation des changements.");

      // restauration des anciennes données dans ce cas
      setAstuces(ancienneAstuce);
    }

    setModificationId(null);
    setContenuModification("");
  };

  return (
    <div className="gestion-astuces-container">
      <div className="ajout-astuce">
        <TextField
          label="Nouvelle astuce"
          value={nouvelleAstuce}
          onChange={(e) => setNouvelleAstuce(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={gererAjouterAstuce}
        >
          Ajouter
        </Button>
      </div>

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
                  className="confirm-button"
                  onClick={() => gererModifierAstuce(astuce.id)}
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
                  onClick={() => gererSupprimerAstuce(astuce.id)}
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
