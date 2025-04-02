// Cette page permet à l'utilisateur de se connecter à son compte (via son email et son mot de passe qui sont enregistrés dans l'API)

import React, { useState } from "react";
import Entete from "../../components/Entete/Entete";
import CreationCompte from "../../components/CreationCompte/CreationCompte";
import ConnexionCompte from "../../components/ConnexionCompte/ConnexionCompte";
import "./Connexion.css";

const Connexion = () => {
  const [inscription, setInscription] = useState(false);

  return (
    <div>
      <Entete />
    
      <div className="connexion-contenu">
        {inscription ? <CreationCompte /> : <ConnexionCompte />}

        <button className="bouton-connexion"
          onClick={() => setInscription(!inscription)}
        >
          {inscription
            ? "Déjà un compte ? Se connecter"
            : "Pas encore de compte ? Créer un compte"}
        </button>
      </div>
    </div>
  );
};

export default Connexion;
