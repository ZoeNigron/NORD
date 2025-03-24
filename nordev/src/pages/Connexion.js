import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Entete from "../components/Entete/Entete";
import CreationCompte from "../components/CreationCompte/CreationCompte";
import ConnexionCompte from "../components/ConnexionCompte/ConnexionCompte";
import modeAudio from "../services/fonctions/modeAudio";
import BoutonAudio from "../components/BoutonAudio/BoutonAudio";

const Connexion = () => {
  const [isInscription, setIsInscription] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    modeAudio("Connectez-vous ou créez un compte pour continuer.");
  }, []);

  return (
    <div>
      <Entete />
      <h1>{isInscription ? "Créer un compte" : "Se connecter"}</h1>

      <BoutonAudio texte="Connectez-vous ou créez un compte pour continuer." />

      {isInscription ? <CreationCompte /> : <ConnexionCompte />}

      <button onClick={() => setIsInscription(!isInscription)}>
        {isInscription
          ? "Déjà un compte ? Se connecter"
          : "Pas encore de compte ? Créer un compte"}
      </button>

      <button onClick={() => navigate("/")} className="bouton-retour">
        Retour
      </button>
    </div>
  );
};

export default Connexion;
