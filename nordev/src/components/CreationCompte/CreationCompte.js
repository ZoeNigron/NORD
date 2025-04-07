// Ce composant gère la création d'un compte utilisateur
// En entrée, aucun paramètre n'est passé en prop, mais il utilise des champs de formulaire pour récupérer les informations de l'utilisateur
// En sortie, il ne retourne rien directement, mais il effectue une requête API pour créer un compte et il affiche un message de succès ou d'erreur

import React, { useState } from "react";
import { creerUtilisateur } from "../../services/api";
import "./CreationCompte.css";

function CreationCompte() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmeMotDePasse, setConfirmeMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");

  const gererSoumission = async (e) => {
    e.preventDefault();
    setErreur("");
    setMessage("");

    if (motDePasse !== confirmeMotDePasse) {
      // si le mot de passe que l'on a entré en premier n'est pas le même que le mot de passe que l'on a entré la deuxième fois, le message d'erreur s'affiche
      setErreur("Les mots de passe ne correspondent pas !");
      return;
    }

    const utilisateur = { nom, prenom, email, motDePasse };

    try {
      const response = await creerUtilisateur(utilisateur); // on utilise l'API pour créer un nouvel utilisateur
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
    <div className="creer-compte">
      <h2 className="creation-titre">Créer un compte</h2>
      {erreur && <p className="erreur">{erreur}</p>}
      {message && <p className="message-succes">{message}</p>}

      <form onSubmit={gererSoumission}>
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
        <button className="bouton-creation" type="submit">
          Créer mon compte
        </button>
      </form>
    </div>
  );
}

export default CreationCompte;
