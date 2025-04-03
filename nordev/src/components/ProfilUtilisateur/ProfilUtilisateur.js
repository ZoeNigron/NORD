// Ce composant permet à l'utilisateur de consulter ses informations personnelles, de les modifier et de se déconnecter
// En sortie, il affiche le formulaire contenant ces informations ainsi que le bouton mettre à jour

import React, { useState, useEffect } from "react";
import { obtenirInfosUtilisateur, mettreAJourInfosUtilisateur } from "../../api";
import "./ProfilUtilisateur.css";

function ProfilUtilisateur() {
  const [utilisateur, setUtilisateur] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [nouveauMotDePasse, setNouveauMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [message, setMessage] = useState(""); 
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const fetchInfosUtilisateur = async () => {
      try {
        const id = localStorage.getItem("utilisateurId"); // on récupère l'id de l'utilisateur depuis le localStorage
        if (!id) throw new Error("Id utilisateur manquant.");

        console.log(`Tentative de récupération des infos utilisateur avec l'Id : ${id}`);
        
        const infosUtilisateur = await obtenirInfosUtilisateur(id); // on récupère les informations de l'utilisateur à partir de l'API

        console.log("Réponse de l'API utilisateur:", infosUtilisateur);

        setUtilisateur(infosUtilisateur);
        setNom(infosUtilisateur.nom);
        setPrenom(infosUtilisateur.prenom);
        setEmail(infosUtilisateur.email);
      } catch (err) {
        console.error("Erreur lors de la récupération des données utilisateur:", err);
        setErreur("Une erreur est survenue en récupérant les informations.");
      }
    };

    fetchInfosUtilisateur();
  }, []);


  const gererMiseAJour = async (e) => { // fonction pour gérer la mise à jour des informations de l'utilisateur
    e.preventDefault();  // cela empêche le rechargement de la page
    setMessage(""); 
    setErreur("");

    if (nouveauMotDePasse && nouveauMotDePasse !== confirmationMotDePasse) { // on vérifie si le mot de passe et sa confirmation correspondent
      setErreur("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    const id = localStorage.getItem("utilisateurId");
    if (!id) {
      setErreur("Id utilisateur manquant.");
      return;
    }

    const utilisateurMisAJour = { // on crée un objet avec les informations mises à jour
      id,
      nom,
      prenom,
      email,
      motDePasse: nouveauMotDePasse || utilisateur.motDePasse,  // si le mot de passe est vide, on garde l'ancien
    };

    try {
      await mettreAJourInfosUtilisateur(id, utilisateurMisAJour); // on appelle la fonction de mise à jour de l'API
      setMessage("Les informations ont été mises à jour avec succès !");
    } catch (err) {
      console.error(err);
      setErreur("Une erreur est survenue lors de la mise à jour des informations.");
    }
  };

  return (
    <div className="profil-utilisateur-contenu">
      <h2>Mes informations</h2>

      {erreur && <p className="erreur-profil-utilisateur">{erreur}</p>}
      {message && <p className="message-profil-utilisateur">{message}</p>}

      <form onSubmit={gererMiseAJour}>
        <div>
          <label>Nom : </label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Nom"
            required // champ obligatoire
          />
        </div>
        <div>
          <label>Prénom : </label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Prénom"
            required
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Nouveau mot de passe (facultatif) : </label>
          <input
            type="password"
            value={nouveauMotDePasse}
            onChange={(e) => setNouveauMotDePasse(e.target.value)}
            placeholder="Entrer le mot de passe"
          />
        </div>
        <div>
          <label>Confirmer le mot de passe : </label>
          <input
            type="password"
            value={confirmationMotDePasse}
            onChange={(e) => setConfirmationMotDePasse(e.target.value)}
            placeholder="Confirmer le mot de passe"
          />
        </div>

        <button className="profil-utilisateur-bouton" type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default ProfilUtilisateur;