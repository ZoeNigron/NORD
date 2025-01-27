// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div>
      <h1>Page de Connexion</h1>
      <Link to="/accueil">
        <button>Se connecter</button>
      </Link>
    </div>
  );
};

export default Connexion;
