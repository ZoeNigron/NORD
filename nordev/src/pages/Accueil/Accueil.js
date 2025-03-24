import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import "./Accueil.css";
import BoutonAudio from "../../components/BoutonAudio/BoutonAudio";
import modeAudio from "../../services/fonctions/modeAudio";
import Astuce from "../../components/Astuce/Astuce"; // Affichage des astuces ajouté

const Accueil = () => {
  const navigate = useNavigate();
  const [estConnecte, setEstConnecte] = useState(false);

  useEffect(() => {
    modeAudio(
      "Bienvenue sur la page d'accueil. Vous pouvez accéder à vos compétences et à d'autres fonctionnalités."
    );
  }, []);

  const gererConnexion = (etat) => {
    setEstConnecte(etat);
    if (!etat) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  };

  return (
    <div className="accueil-container">
      <Entete />
      <BarreNavig title="Accueil" estConnecte={estConnecte} />
      <BoutonAudio texte="Bienvenue sur la page d’accueil." />

      {/* Affichage du bouton connexion si l'utilisateur n'est pas connecté */}
      {!estConnecte && (
        <div className="boutons-connexion">
          <button className="bouton" onClick={() => navigate("/connexion")}>
            Se connecter
          </button>
        </div>
      )}

      {/* Affichage de l'astuce si l'utilisateur est connecté */}
      {estConnecte && <Astuce />}

      <h2 className="intro-texte">J'améliore mon sens de l'orientation :</h2>

      <Link to="/mes-competences">
        <button className="bouton">Je commence</button>
      </Link>
    </div>
  );
};

export default Accueil;
