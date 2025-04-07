// Ce composant permet à un utilisateur de se connecter à son compte. Lorsqu'un utilisateur envoie le formulaire, on fait une demande à l'API pour vérifier les informations de connexion
// En entrée, le composant utilise l'adresse email de l'utilisateur (string) et le motDePasse (string)
// En sortie, si les informations sont correctes, il redirige l'utilisateur vers la page d'accueil et stocke les informations d'authentification dans le localStorage, sinon il affiche un message d'erreur

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connecterUtilisateur } from "../../services/api";
import "./ConnexionCompte.css";

function ConnexionCompte() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  const navigate = useNavigate(); // on utilise ce hook pour naviguer entre les pages

  const gererConnexion = async (e) => {
    // fonction pour gérer la soumission du formulaire et vérifier les informations de connexion
    e.preventDefault();
    setErreur("");

    try {
      const response = await connecterUtilisateur({ email, motDePasse }); // on appelle l'API pour vérifier les informations de connexion

      if (response.token && response.id) {
        // si la réponse contient un token et un id utilisateur, la connexion est réussie et on stocke les infos dans le localStorage
        localStorage.setItem("token", response.token);
        localStorage.setItem("idUtilisateur", response.id);
        localStorage.setItem("estAuthentifie", "true");

        navigate("/accueil");
      } else {
        setErreur("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      if (error.response && error.response.status === 401) {
        setErreur("Email ou mot de passe incorrect.");
      } else {
        setErreur("Une erreur est survenue. Vérifiez votre connexion.");
      }
    }
  };

  return (
    <div className="connexion">
      <h2 className="connexion-titre">Connexion</h2>
      {erreur && <p className="erreur">{erreur}</p>}
      <form onSubmit={gererConnexion}>
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
        <button className="bouton-se-connecter" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default ConnexionCompte;
