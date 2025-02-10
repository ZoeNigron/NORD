import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import "./BarreNavig.css";

function BarreNavig({ title }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAccueil = location.pathname === "/";

  return (
    <nav className="barreNavig">
      {!isAccueil && (
        <button className="boutonRetour" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
      )}

      <div className="titrePage">{title || "Accueil"}</div>

      <button className="profilButton">
        <FaUserCircle />
      </button>
    </nav>
  );
}

export default BarreNavig;
