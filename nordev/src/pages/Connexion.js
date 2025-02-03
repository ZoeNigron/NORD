// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import BoutonAction from "../components/BoutonAction";
import Entete from "../components/Entete/Entete";

const Connexion = () => {
  return (
    <div>
      <Entete />
      <h1>Page de Connexion</h1>
      <Link to="/accueil">
      <BoutonAction texte="Connexion" onClick={() => console.log("Navigation vers la page de connexion")} />
      </Link>
    </div>
  );
};

export default Connexion;
