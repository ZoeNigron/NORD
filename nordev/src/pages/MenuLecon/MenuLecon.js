// Cette page affiche la liste des leçons disponibles pour l'utilisateur pour qu'il puisse sélectionner une leçon. Si l'utilisateur sélectionne une leçon non encore développée, il est redirigé vers une page faite pour cela

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenirLecons } from "../../api";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import "./MenuLecon.css";

function MenuLecons() {
  const [lecons, setLecons] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const fetchLecons = async () => {
      try {
        const data = await obtenirLecons(); // on appelle l'API pour obtenir les leçons
        setLecons(data);
      } catch (err) {
        setErreur("Erreur lors de la récupération des leçons.");
      } finally {
        setChargement(false);
      }
    };

    fetchLecons();
  }, []);

  if (chargement) return <p>Chargement des leçons...</p>;
  if (erreur) return <p>{erreur}</p>;

  return (
    <div>
      <Entete />

      <BarreNavig
        title="Menu des leçons"
        texteAudio="Bienvenue dans le menu des leçons. Sélectionnez une leçon pour commencer."
      />

      <h2>Choisissez une leçon :</h2>
      <ul>
        {/* on fait un boucle à travers la liste des leçons et et on affiche avec une redirection conditionnelle */}
        {lecons.map((lecon) => (
          <li key={lecon.id}>
            {lecon.id === 1 || lecon.id === 2 ? (
              <Link to={`/lecon/${lecon.id}`}>{lecon.titre}</Link> // leçon existante
            ) : (
              <Link to="/page-non-developpee">{lecon.titre}</Link> // leçon non développée
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuLecons;
