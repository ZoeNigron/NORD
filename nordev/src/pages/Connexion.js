import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Entete from "../components/Entete/Entete";
import CreationCompte from "../components/CreationCompte/CreationCompte";
import ConnexionCompte from "../components/ConnexionCompte/ConnexionCompte";

const Connexion = () => {
  const [isInscription, setIsInscription] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Entete />
      <h1>{isInscription ? "Créer un compte" : "Se connecter"}</h1>

      {isInscription ? <CreationCompte /> : <ConnexionCompte />}

      <button onClick={() => setIsInscription(!isInscription)}>
        {isInscription
          ? "Déjà un compte ? Se connecter"
          : "Pas encore de compte ? Créer un compte"}
      </button>

      <button onClick={() => navigate(-1)} className="bouton-retour">
        Retour
      </button>
    </div>
  );
};

export default Connexion;
