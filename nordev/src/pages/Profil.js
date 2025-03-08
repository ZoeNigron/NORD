import React from "react";
import BarreNavig from "../components/Navigation/BarreNavig";
import ProfilUtilisateur from "../components/ProfilUtilisateur/ProfilUtilisateur";
import Entete from "../components/Entete/Entete";
import BoutonDeconnexion from "../components/BoutonDeconnexion";

const Profil = () => {
  return (
    <div>
      <Entete/>
      <BarreNavig title="Profil" backLink="/mes-competences" homeLink="/" />
      <ProfilUtilisateur/>
      <BoutonDeconnexion />
    </div>
  );
};

export default Profil;
