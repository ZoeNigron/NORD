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
        const id = localStorage.getItem("utilisateurId");
        if (!id) throw new Error("ID utilisateur manquant.");

        console.log(`Tentative de récupération des infos utilisateur avec l'ID : ${id}`);
        
        const infosUtilisateur = await obtenirInfosUtilisateur(id);

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

  const gererMiseAJour = async (e) => {
    e.preventDefault();
    setMessage("");
    setErreur("");

    if (nouveauMotDePasse && nouveauMotDePasse !== confirmationMotDePasse) {
      setErreur("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    const id = localStorage.getItem("utilisateurId");

    if (!id) {
      setErreur("ID utilisateur manquant.");
      return;
    }

    const utilisateurMisAJour = {
      id,
      nom,
      prenom,
      email,
      motDePasse: nouveauMotDePasse || utilisateur.motDePasse,
    };

    try {
      await mettreAJourInfosUtilisateur(id, utilisateurMisAJour);
      setMessage("Les informations ont été mises à jour avec succès !");
    } catch (err) {
      console.error(err);
      setErreur("Une erreur est survenue lors de la mise à jour des informations.");
    }
  };

  return (
    <div className="profil-container">
      <h2>Mes informations</h2>

      {erreur && <p className="erreur">{erreur}</p>}
      {message && <p className="message">{message}</p>}

      <form onSubmit={gererMiseAJour}>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Nom"
            required
          />
        </div>
        <div>
          <label>Prénom:</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Prénom"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Nouveau mot de passe :</label>
          <input
            type="password"
            value={nouveauMotDePasse}
            onChange={(e) => setNouveauMotDePasse(e.target.value)}
            placeholder="Nouveau mot de passe (facultatif)"
          />
        </div>
        <div>
          <label>Confirmer le mot de passe :</label>
          <input
            type="password"
            value={confirmationMotDePasse}
            onChange={(e) => setConfirmationMotDePasse(e.target.value)}
            placeholder="Confirmez votre nouveau mot de passe"
          />
        </div>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default ProfilUtilisateur;
