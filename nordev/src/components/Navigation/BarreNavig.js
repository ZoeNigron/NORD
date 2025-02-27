import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack, AccountCircle } from "@mui/icons-material";
import "./BarreNavig.css";

function BarreNavig({ titre }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const estAccueil = location.pathname === "/";

  const allerAuProfil = () => {
    navigate("/profil");
  };

  return (
    <nav className="barreNavig">
      {!estAccueil && (
        <button className="boutonRetour" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
      )}

      <div className="titrePage">{titre || "Accueil"}</div>

      <button className="boutonProfil" onClick={allerAuProfil}>
        <AccountCircle />
      </button>
    </nav>
  );
}

export default BarreNavig;
