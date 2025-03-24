import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";  // Import du hook context
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import "./Accueil.css";
import BoutonAudio from "../../components/BoutonAudio/BoutonAudio";
import Astuce from "../../components/Astuce/Astuce";

const Accueil = () => {
  const navigate = useNavigate();
  const { estConnecte, gererConnexion } = useAuth(); // Utilisation du contexte

  return (
    <div className="accueil-container">
      <Entete />
      <BarreNavig title="Accueil" estConnecte={estConnecte} />
      <BoutonAudio texte="Bienvenue sur la page d’accueil." />

      {!estConnecte && (
        <div className="boutons-connexion">
          <button className="bouton" onClick={() => navigate("/connexion")}>
            Se connecter
          </button>
        </div>
      )}

      {estConnecte && (
        <div className="boutons-connexion">
          <button className="bouton" onClick={() => gererConnexion(false)}>
            Se déconnecter
          </button>
        </div>
      )}

      {estConnecte && <Astuce />}

      <h2 className="intro-texte">J'améliore mon sens de l'orientation :</h2>

      <Link to="/mes-competences">
        <button className="bouton">Je commence</button>
      </Link>
    </div>
  );
};

export default Accueil;
