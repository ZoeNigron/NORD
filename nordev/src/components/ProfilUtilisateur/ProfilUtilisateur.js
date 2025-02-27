import React, { useState, useEffect } from "react";
import { getUserInfo, updateUserInfo } from "../../api"; // Assure-toi d'avoir ces fonctions dans ton API
import { useNavigate } from "react-router-dom";
import "./ProfilUtilisateur.css"; // Tu peux ajouter un fichier CSS pour la mise en page

function ProfilUtilisateur() {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
  });
  const [nom, setNom] = useState(user.nom);
  const [prenom, setPrenom] = useState(user.prenom);
  const [email, setEmail] = useState(user.email);
  const [motDePasse, setMotDePasse] = useState(user.motDePasse);
  const [nouveauMotDePasse, setNouveauMotDePasse] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();

  // Récupère les informations de l'utilisateur lors du chargement du composant
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo(); // Appelle une API pour obtenir les informations de l'utilisateur
        setUser(userInfo);
        setNom(userInfo.nom);
        setPrenom(userInfo.prenom);
        setEmail(userInfo.email);
      } catch (err) {
        setErreur("Une erreur est survenue en récupérant les informations.");
      }
    };

    fetchUserInfo();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setErreur("");

    // Si le mot de passe est changé, il faut le vérifier
    if (nouveauMotDePasse && nouveauMotDePasse !== motDePasse) {
      setErreur("Les mots de passe ne correspondent pas.");
      return;
    }

    const updatedUser = {
      nom,
      prenom,
      email,
      motDePasse: nouveauMotDePasse || motDePasse, // Utilise le nouveau mot de passe ou l'ancien
    };

    try {
      await updateUserInfo(updatedUser); // Appelle l'API pour mettre à jour les informations
      setMessage("Les informations ont été mises à jour avec succès !");
    } catch (err) {
      setErreur("Une erreur est survenue lors de la mise à jour des informations.");
    }
  };

  return (
    <div className="profil-container">
      <h2>Profil de l'utilisateur</h2>

      {erreur && <p className="erreur">{erreur}</p>}
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleUpdate}>
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
          <label>Mot de passe actuel:</label>
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            placeholder="Mot de passe actuel"
            required
          />
        </div>
        <div>
          <label>Modifier le mot de passe:</label>
          <input
            type="password"
            value={nouveauMotDePasse}
            onChange={(e) => setNouveauMotDePasse(e.target.value)}
            placeholder="Nouveau mot de passe (facultatif)"
          />
        </div>

        <button type="submit">Mettre à jour</button>
      </form>

      <button onClick={() => navigate("/accueil")}>Retour à l'accueil</button>
    </div>
  );
}

export default ProfilUtilisateur;
