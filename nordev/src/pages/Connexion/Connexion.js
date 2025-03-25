import React, { useState } from "react";
import Entete from "../../components/Entete/Entete";
import CreationCompte from "../../components/CreationCompte/CreationCompte";
import ConnexionCompte from "../../components/ConnexionCompte/ConnexionCompte";
import "./Connexion.css";

const Connexion = () => {
  const [isInscription, setIsInscription] = useState(false);

  return (
    <div>
      <Entete />
    
      <div className="connexion-container">
        {isInscription ? <CreationCompte /> : <ConnexionCompte />}

        <button
          onClick={() => setIsInscription(!isInscription)}
          className="connexion-bouton"
        >
          {isInscription
            ? "Déjà un compte ? Se connecter"
            : "Pas encore de compte ? Créer un compte"}
        </button>
      </div>
    </div>
  );
};

export default Connexion;
