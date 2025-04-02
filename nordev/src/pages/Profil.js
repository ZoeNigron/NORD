// Cette page gère l'affichage du profil utilisateur. Elle affiche les informations du profil utilisateur via le composant "ProfilUtilisateur" et elle propose un bouton de déconnexion pour permettre à l'utilisateur de se déconnecter

import React from "react";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import ProfilUtilisateur from "../components/ProfilUtilisateur/ProfilUtilisateur";
import Entete from "../components/Entete/Entete";
import BoutonDeconnexion from "../components/BoutonDeconnexion/BoutonDeconnexion";

const Profil = () => {
  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Profil"
        texteAudio="Bienvenue dans votre profil. Consultez vos informations personnelles ici."
      />
      <ProfilUtilisateur />
      <BoutonDeconnexion />
    </div>
  );
};

export default Profil;
