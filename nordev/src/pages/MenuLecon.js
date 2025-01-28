// src/pages/Lecons.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import lecons from "../services/lecons"; // Vos données des leçons
import BoutonAction from "../components/BoutonAction";
import Entete from "../components/Entete";

const Lecons = () => {
  const { id } = useParams(); // Récupérer l'ID de la leçon (si présent)

  // Si un ID est présent, trouver la leçon correspondante
  const lecon = id ? lecons.find((lecon) => lecon.id === parseInt(id)) : null;

  return (
    <div>
      <Entete />
      <BarreNavig
        title={id ? `Leçon ${id}` : "Menu des Leçons"}
        backLink={id ? "/menu-lecons" : "/evaluer-les-distances"}
        homeLink="/"
      />

      {id && lecon ? (
        // Affichage des détails de la leçon
        <div>
          <h1>{lecon.titre}</h1>
          <p>{lecon.description}</p>
          <p>
            <strong>Objectif :</strong> {lecon.objectif}
          </p>
          <Link to={`/faire-lecon/${id}`}>
          <BoutonAction texte="Commencer la leçon" onClick={() => console.log("Navigation vers la leçon")} />
          </Link>
        </div>
      ) : (
        // Affichage de la liste des leçons
        <div>
          <h1>Menu des Leçons</h1>
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

export default Lecons;
