import React from "react";
import "./Astuce.css";
import { FaLightbulb } from 'react-icons/fa';

import astuceDuJour from "../../services/astuceDuJour";

function Astuce() {
  return (
      <div className="astuce-container">
          <div className="astuce-header">
            L'astuce du jour
          </div>
          <div className="astuce-content">
            <FaLightbulb className="astuce-icon" />
            <p className="astuce-text">{astuceDuJour()}</p>
          </div>
      </div>
  );
}

export default Astuce;
