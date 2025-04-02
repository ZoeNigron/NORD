// Ce composant crée la barre de navigation présente en haut de chaque page
// En entrée, il prend deux props, "titre" (string) et "texteAudio" (string), qui est le texte à lire à voix haute via le bouton audio
// En sortie, il affiche un bouton en forme de flèche pour revenir à la page précédente (sauf sur la page d'accueil car il n'y a pas de page avant), il affiche le titre de la page en cours, il affiche un bouton d'accès au profil (sauf si l'utilisateur est déjà sur la page du profil) et il affiche un bouton audio pour lire le texte fourni

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack, AccountCircle } from "@mui/icons-material";
import BoutonAudio from "../BoutonAudio/BoutonAudio";
import "./BarreNavig.css";

function BarreNavig({ titre, texteAudio }) {
  const location = useLocation();
  const navigate = useNavigate();

  const estAccueil = location.pathname === "/accueil";
  const estProfil = location.pathname === "/profil";

  return (
    <nav className="barre-navig">
      {!estAccueil && (
        <button className="bouton-retour" onClick={() => window.history.back()}>
          <ArrowBack />
        </button>
      )}

      <div className="titre-page">{titre || "Accueil"}</div>

      <div className="icones-navigation">
        {texteAudio && <BoutonAudio texte={texteAudio} />}
        {!estProfil && (
          <button className="bouton-profil" onClick={() => navigate("/profil")}>
            <AccountCircle />
          </button>
        )}
      </div>
    </nav>
  );
}

export default BarreNavig;
