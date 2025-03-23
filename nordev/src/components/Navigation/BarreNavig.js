import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import "./BarreNavig.css";

function BarreNavig({ title }) {
  const location = useLocation();
  const navigate = useNavigate();

  const estAccueilSansCo = location.pathname === "/accueil-sans-connexion";
  const estProfil = location.pathname === "/profil";

  return (
    <nav className="barreNavig">
      {(estAccueilSansCo || location.pathname !== "/") && (
        <button className="boutonRetour" onClick={() => navigate("/")}>
          <ArrowBack />
        </button>
      )}

      <div className="titrePage">{title || "Accueil"}</div>

      {!estProfil && location.pathname !== "/accueil-sans-connexion" && (
        <button className="boutonProfil" onClick={() => navigate("/profil")}>
        </button>
      )}
    </nav>
  );
}

export default BarreNavig;
