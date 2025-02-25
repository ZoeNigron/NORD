import React from "react";
import "./Astuce.css";
import { LightbulbOutlined } from "@mui/icons-material";

import astuceDuJour from "../../services/fonctions/astuceDuJour";

function Astuce() {
  return (
      <div className="astuce-container">
          <div className="astuce-header">
            L'astuce du jour
          </div>
          <div className="astuce-content">
            <LightbulbOutlined className="astuce-icon" />
            <p className="astuce-text">{astuceDuJour()}</p>
          </div>
      </div>
  );
}

export default Astuce;
