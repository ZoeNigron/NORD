import React from "react";
import { Link } from "react-router-dom";
import Entete from "../components/Entete/Entete";
import BarreNavig from "../components/Navigation/BarreNavig";

function PageNonDeveloppee() {
  return (
    <div>
      <Entete />
      <BarreNavig title="Page indisponible" homeLink="/" />
      <h1>Page indisponible pour le moment</h1>
      <Link to="/"></Link>
      <p>Cette fonctionnalité n'a pas été développée pour ce projet.</p>
    </div>
  );
}

export default PageNonDeveloppee;
