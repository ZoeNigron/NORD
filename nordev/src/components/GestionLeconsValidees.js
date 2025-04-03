import React, { useEffect, useState } from "react";
import { mettreAJourLeconsValidees } from "../services/api"; // Cette fonction mettra à jour l'API avec la nouvelle leçon validée.

const GestionLeconsValidees = ({ tentativesReussies, userId }) => {
  const [leconValidee, setLeconValidee] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a réussi 5 fois d'affilée
    if (tentativesReussies >= 5 && !leconValidee) {
      // Valider la leçon (on suppose que la leçon 1 est validée, changez si nécessaire)
      validerLecon();
    }
  }, [tentativesReussies, leconValidee]);

  const validerLecon = async () => {
    try {
      // Appeler l'API pour ajouter la leçon à la liste des leçons validées de l'utilisateur
      await mettreAJourLeconsValidees(userId, 1); // 1 = ID de la leçon
      setLeconValidee(true);
      alert("Leçon validée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la validation de la leçon :", error);
    }
  };

  return (
    <div>
      {leconValidee ? (
        <p>La leçon a été validée !</p>
      ) : (
        <p>Réussissez 5 fois d'affilée pour valider la leçon.</p>
      )}
    </div>
  );
};

export default GestionLeconsValidees;
