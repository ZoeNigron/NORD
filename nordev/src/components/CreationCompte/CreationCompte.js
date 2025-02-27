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
      const nouvelUtilisateur = await creerUtilisateur(utilisateur);
      if (nouvelUtilisateur) {
        setMessage("Compte créé avec succès ! 🎉");
        console.log("Utilisateur créé :", nouvelUtilisateur);

        setTimeout(() => {
          window.location.href = "/connexion";
        }, 2000);
      }
    } catch (err) {
      setErreur("Une erreur est survenue lors de la création du compte.");
    }
  };

  return (
    <div className="container">
      <h2>Créer un compte</h2>
      {erreur && <p className="erreur">{erreur}</p>}
      {message && <p className="message">{message}</p>}

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
        <button type="submit">Créer mon compte</button>
      </form>
    </div>
  );
}

export default CreationCompte;
