import React, { useState } from "react";
import { creerUtilisateur } from "../../api";
import "./CreationCompte.css";

function CreationCompte() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmeMotDePasse, setConfirmeMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");

  const gererSoumission = async (event) => {
    event.preventDefault();
    setErreur("");
    setMessage("");

    if (motDePasse !== confirmeMotDePasse) {
      setErreur("Les mots de passe ne correspondent pas !");
      return;
    }

    const utilisateur = { nom, prenom, email, motDePasse };

    try {
      const response = await creerUtilisateur(utilisateur);
      console.log("Réponse du serveur :", response);
    
      if (response.status === 201) {
        setMessage("Compte créé avec succès ! Vous allez être redirigé...");
        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 2000);
      }
    } catch (err) {
      console.error("Erreur complète :", err);
    
      if (err.response) {
        console.error("Statut :", err.response.status);
        console.error("Données :", err.response.data);
    
        if (err.response.status === 400) {
          setErreur(err.response.data.message || "Cet email est déjà utilisé.");
        } else {
          setErreur("Une erreur est survenue lors de la création du compte.");
        }
      } else if (err.request) {
        setErreur("Problème de connexion avec le serveur.");
        console.error("Requête envoyée mais pas de réponse :", err.request);
      } else {
        setErreur("Une erreur inconnue est survenue.");
        console.error("Erreur inconnue :", err.message);
      }
    }
  };    

  return (
    <div className="container">
      <h2>Créer un compte</h2>
      {erreur && <p className="erreur">{erreur}</p>}
      {message && <p className="message success">{message}</p>}
      
      <form onSubmit={gererSoumission} className="form-creation">
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          required
        />
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Prénom"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          placeholder="Mot de passe"
          required
        />
        <input
          type="password"
          value={confirmeMotDePasse}
          onChange={(e) => setConfirmeMotDePasse(e.target.value)}
          placeholder="Confirmer le mot de passe"
          required
        />
        <button type="submit">Créer mon compte</button>
      </form>
    </div>
  );
}

export default CreationCompte;
