import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack, AccountCircle } from "@mui/icons-material"; // Icône profil ajoutée
import "./BarreNavig.css";

function BarreNavig({ title, estConnecte }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="barreNavig">
      {location.pathname !== "/" && (
        <button className="boutonRetour" onClick={() => navigate("/")}>
          <ArrowBack />
        </button>
      )}

      <div className="titrePage">{title || "Accueil"}</div>

      {/* Affichage de l'icône de profil uniquement si connecté */}
      {estConnecte && (
        <button className="boutonProfil" onClick={() => navigate("/profil")}>
          <AccountCircle />
        </button>
      )}
    </nav>
  );
}

export default BarreNavig;
