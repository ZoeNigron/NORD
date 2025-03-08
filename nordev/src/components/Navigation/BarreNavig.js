import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack, AccountCircle } from "@mui/icons-material";
import "./BarreNavig.css";

function BarreNavig({ title }) {
  const location = useLocation();
  const navigate = useNavigate();

  const estAccueil = location.pathname === "/accueil";
  const estProfil = location.pathname === "/profil";

  return (
    <nav className="barreNavig">
      {!estAccueil && (
        <button className="boutonRetour" onClick={() => window.history.back()}>
          <ArrowBack />
        </button>
      )}

      <div className="titrePage">{title || "Accueil"}</div>

      {!estProfil && (
        <button className="boutonProfil" onClick={() => navigate("/profil")}>
          <AccountCircle />
        </button>
      )}
    </nav>
  );
}

export default BarreNavig;
