// MenuLecons.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import lecons from "../services/lecons"; // Vos données des leçons
//import BoutonAction from "../components/BoutonAction";
import Entete from "../components/Entete";
import Lecon1 from "./Lecon1";
import Lecon2 from "./Lecon2";
import "./MenuLecon.css"; // Assurez-vous d'importer le CSS

const MenuLecons = () => {
  const { id } = useParams(); // Récupérer l'ID de la leçon (si présent)

  const lecon = id ? lecons.find((lecon) => lecon.id === parseInt(id)) : null;

  const renderLecon = () => {
    switch (id) {
      case "1":
        return <Lecon1 />;
      case "2":
        return <Lecon2 />;
      default:
        return <p>Leçon non trouvée.</p>;
    }
  };

  return (
    <div>
      <Entete />
      <BarreNavig
        title={id ? `Leçon ${id}` : "Menu des Leçons"}
        backLink={id ? "/menu-lecons" : "/evaluer-les-distances"}
        homeLink="/"
      />

      {id && lecon ? (
        <div className="lecon-detail">
          <h2>{lecon.titre}</h2>
          <p>{lecon.description}</p>
          <p>
            <strong>Objectif :</strong> {lecon.objectif}
          </p>
          <div>{renderLecon()}</div>
        </div>
      ) : (
        <div>
          <ul>
            {lecons.map((lecon) => (
              <li key={lecon.id}>
                <Link to={`/menu-lecons/${lecon.id}`}>{lecon.titre}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuLecons;
