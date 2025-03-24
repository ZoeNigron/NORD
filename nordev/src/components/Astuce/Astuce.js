import React from "react";
import "./Astuce.css";
import { LightbulbOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import astuceDuJour from "../../services/fonctions/astuceDuJour";

function Astuce() {
  const navigate = useNavigate();

  return (
      <div className="astuce-container">
          <div className="astuce-header">
            L'astuce du jour
          </div>
          <div className="astuce-content">
            <LightbulbOutlined className="astuce-icon" />
            <p className="astuce-text">{astuceDuJour()}</p>
          </div>

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
