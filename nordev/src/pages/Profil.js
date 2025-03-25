import React from "react";
import BarreNavig from "../components/Navigation/BarreNavig";
import ProfilUtilisateur from "../components/ProfilUtilisateur/ProfilUtilisateur";
import Entete from "../components/Entete/Entete";
import BoutonDeconnexion from "../components/BoutonDeconnexion";

const Profil = () => {
  const texteAudio = "Bienvenue dans votre profil. Consultez vos informations personnelles ici.";

  return (
    <div>
      <Entete />
      <BarreNavig 
        title="Profil" 
        texteAudio={texteAudio} 
      />
      
      <ProfilUtilisateur />
      <BoutonDeconnexion />
    </div>
  );
};

export default Profil;
