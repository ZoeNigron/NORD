// Cette page affiche la liste des leçons disponibles pour l'utilisateur pour qu'il puisse sélectionner une leçon. Si l'utilisateur sélectionne une leçon non encore développée, il est redirigé vers une page faite pour cela

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenirLecons, obtenirInfosUtilisateur } from "../../services/api";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import Entete from "../../components/Entete/Entete";
import "./MenuLecon.css";

function MenuLecons() {
  const [lecons, setLecons] = useState([]);
  const [leconsValidees, setLeconsValidees] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const userId = localStorage.getItem("idUtilisateur"); // ID utilisateur stocké en localStorage
  console.log("ID utilisateur dans localStorage :", userId);

  useEffect(() => {
    const fetchLecons = async () => {
      try {
        const data = await obtenirLecons();
        setLecons(data);
      } catch (err) {
        setErreur("Erreur lors de la récupération des leçons.");
      }
    };

    const fetchUserInfos = async () => {
      try {
        const utilisateur = await obtenirInfosUtilisateur(userId);
        console.log("Leçons validées récupérées :", utilisateur.leconsvalidees);
        setLeconsValidees(utilisateur.leconsvalidees || []); // Récupérer les leçons validées
      } catch (err) {
        console.error(
          "Erreur lors de la récupération des infos utilisateur :",
          err
        );
      } finally {
        setChargement(false);
      }
    };

    fetchLecons();
    fetchUserInfos();
  }, [userId]);

  if (chargement) return <p>Chargement des leçons...</p>;
  if (erreur) return <p>{erreur}</p>;

  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Menu des leçons"
        texteAudio="Bienvenue dans le menu des leçons. Sélectionnez une leçon pour commencer."
      />
      <h2 className="titre-choix-lecon">Choisissez une leçon :</h2>
      <ul className="liste-lecon">
        {lecons.map((lecon) => {
          const estValidee = leconsValidees.includes(lecon.id);
          console.log(
            `Leçon ${lecon.id} (${lecon.titre}) - Validée :`,
            estValidee
          );

          // Classes conditionnelles
          const classNameLecon = estValidee ? "lecon-validee" : "puce-lecon";

          return (
            <li key={lecon.id} className={classNameLecon}>
              <Link to={`/lecon/${lecon.id}`}>{lecon.titre}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuLecons;
