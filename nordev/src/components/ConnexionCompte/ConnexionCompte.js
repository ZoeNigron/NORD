import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connecterUtilisateur } from "../../api";
import "./ConnexionCompte.css"; // Import du fichier CSS

function ConnexionCompte() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();

  const gererConnexion = async (e) => {
    e.preventDefault();
    setErreur("");

    try {
      const response = await connecterUtilisateur({ email, motDePasse });

      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/accueil");
      } else {
        setErreur("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErreur("Email ou mot de passe incorrect.");
      } else {
        setErreur("Une erreur est survenue. Vérifiez votre connexion.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Connexion</h2>
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
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default ConnexionCompte;
