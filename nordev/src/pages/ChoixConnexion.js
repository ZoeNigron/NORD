import React from "react";
import { useNavigate } from "react-router-dom";
import Entete from "../components/Entete/Entete";
import "./ChoixConnexion.css"

function ChoixConnexion() {
  const navigate = useNavigate();
  
  const gererChoixConnexion = (estConnecte) => {
    if (estConnecte) {
      navigate("/connexion");
    } else {
      navigate("/accueil-sans-connexion");
    }
  };

  return (
    <div>
      <Entete />
      <div className = "choix">
      <h2>Bienvenue sur NORDev</h2>
      <button onClick={() => gererChoixConnexion(true)}>Connexion</button>
      <button onClick={() => gererChoixConnexion(false)}>Sans Connexion</button>
      </div>
    </div>
  );
}

export default ChoixConnexion;
