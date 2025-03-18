import React from "react";
import "./Astuce.css";
import { LightbulbOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";  // Pour gérer la navigation

import astuceDuJour from "../../services/fonctions/astuceDuJour";

function Astuce() {
  const navigate = useNavigate(); // Hook pour naviguer vers une autre page

  return (
      <div className="astuce-container">
          <div className="astuce-header">
            L'astuce du jour
          </div>
          <div className="astuce-content">
            <LightbulbOutlined className="astuce-icon" />
            <p className="astuce-text">{astuceDuJour()}</p>
          </div>

          {/* Bouton pour accéder à la gestion des astuces */}
          <button
            className="gestion-astuce-btn"
            onClick={() => navigate("/mes-astuces")}
          >
            Gérer les astuces
          </button>
      </div>
  );
}

export default Astuce;
