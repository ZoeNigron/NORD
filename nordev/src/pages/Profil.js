import React, { useEffect } from "react";
import BarreNavig from "../components/Navigation/BarreNavig";
import ProfilUtilisateur from "../components/ProfilUtilisateur/ProfilUtilisateur";
import Entete from "../components/Entete/Entete";
import BoutonDeconnexion from "../components/BoutonDeconnexion";
import modeAudio from "../services/fonctions/modeAudio";
import BoutonAudio from "../components/BoutonAudio/BoutonAudio";

const Profil = () => {
  useEffect(() => {
    modeAudio("Bienvenue dans votre profil. Consultez vos informations personnelles ici.");
  }, []);

  return (
    <div>
      <Entete />
      <BarreNavig title="Profil" backLink="/mes-competences" homeLink="/" />

      <BoutonAudio texte="Bienvenue dans votre profil. Consultez vos informations personnelles ici." />

      <ProfilUtilisateur />
      <BoutonDeconnexion />
    </div>
  );
};

export default Profil;
