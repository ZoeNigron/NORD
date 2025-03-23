import React from "react";
import Entete from "../../components/Entete/Entete";
import BarreNavig from "../../components/Navigation/BarreNavig";
import GestionAstuces from "../../components/GestionAstuces/GestionAstuces";

function Astuces() {
  return (
    <div>
      <Entete />
      <BarreNavig title="Mes astuces" homeLink="/" />
      <GestionAstuces />
    </div>
  );
}

export default Astuces;
