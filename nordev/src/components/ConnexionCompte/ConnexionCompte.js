import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connecterUtilisateur } from "../../api";
import "./ConnexionCompte.css";

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

      if (response.token && response.id) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.id);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/accueil");  // Redirection vers l'accueil
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
    <div className="container">
      <h2>Connexion</h2>
      <p>
        Si vous n'utilisez pas le PC de Zoé où l'API est en local,
        la création de compte ainsi que la connexion ne fonctionneront pas.
        Dans ce cas, nous vous recommandons d'utiliser l'option "Sans Connexion".
      </p>
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
