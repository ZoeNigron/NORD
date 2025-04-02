// Ce composant permet de gérer les étapes pour récupérer le premier point GPS de l'utilisateur quand il appuie sur "Démarrer" puis pour récupérer le deuxième point GPS lorsqu'il appuie sur "Terminer". Puis il fait appel au composant CalculDistance pour calculer la distance entre les deux points
// En entrée, il prend trois props : "exercice" qui est un objet, "lorsDistanceCalculee" qui est une fonction exécutée lorsque la distance est calculée, et "lorsErreurPosition" qui est une fonction appelée si on n'arrive pas à géolocaliser l'utilisateur
// En sortie, on a l'affichage de la carte avec la position de l'utilisateur et la distance parcourue (et l'affichage d'un message d'erreur en cas de problème avec la localisation)

import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet"; // on utilise les composants de la bibliothèque React-Leaflet
import { LocationOn, Flag } from "@mui/icons-material";
import Carte from "../Carte/Carte";
import PositionUtilisateur from "../PositionUtilisateur";
import CalculDistance from "../CalculDistance";
import IconePosition from "../../services/IconePosition";
import "./DistanceLecon.css";

const DistanceLecon1 = ({
  exercice,
  lorsDistanceCalculee,
  lorsErreurPosition,
}) => {
  const [positionDepart, setPositionDepart] = useState(null);
  const [positionArrivee, setPositionArrivee] = useState(null);
  const [phase, setPhase] = useState(0);
  const [erreurPosition, setErreurPosition] = useState(null);

  const gererPositionCapturee = (coordonnees) => {
    // cette fonction est déclenchée lorsque l'utilisateur "fixe" sa position avec le bouton "Démarrer"
    if (phase === 1) {
      setPositionDepart(coordonnees);
      setPhase(2); // on passe à l'étape suivante (c'est-à-dire se déplacer puis appuyer sur le bouton "Terminer")
      setErreurPosition(null);
    } else if (phase === 3) {
      setPositionArrivee(coordonnees);
      setPhase(4); // l'exercice est terminé
      setErreurPosition(null);
    }
  };

  const gererErreurPosition = (erreur) => {
    setErreurPosition(
      "Impossible de récupérer votre position. Veuillez vérifier vos paramètres de localisation."
    );

    if (lorsErreurPosition) {
      lorsErreurPosition(erreur);
    }
  };

  const gererDistanceCalculee = (distance) => {
    // on appelle cette fonction après le calcul de la distance
    lorsDistanceCalculee(distance);
  };

  useEffect(() => {
    let timer;
    if (phase === 1) {
      timer = setTimeout(() => {
        setErreurPosition(
          "Impossible de récupérer votre position. Veuillez vérifier vos paramètres de localisation."
        );
      }, 5000); // si la position n'est pas récupérée au bout de 5 secondes, on affiche le message d'erreur

      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (!exercice) {
    return <h3>Aucun exercice sélectionné.</h3>;
  }

  return (
    <div>
      <h3 className="exercice-nom">{exercice.nom}</h3>

      {erreurPosition && (
        <div className="erreur-position">{erreurPosition}</div>
      )}

      {/* Phase 0 : c'est le début de l'exercice avec le bouton pour commencer */}
      {phase === 0 && (
        <div>
          <button className="bouton-phase" onClick={() => setPhase(1)}>
            Démarrer
          </button>
        </div>
      )}

      {/* Phase 2 : quand l'utilisateur a enregistré sa position de départ, il peut se déplacer puis cliquer pour terminer */}
      {phase === 2 && (
        <div>
          <button className="bouton-phase" onClick={() => setPhase(3)}>
            Terminer
          </button>
        </div>
      )}

      <Carte
        contenu={
          <>
            {/* Phase 1 : on capture la position de départ */}
            {phase === 1 && (
              <PositionUtilisateur
                positionTrouvee={gererPositionCapturee} // on capture la position
                miseAJourErreur={gererErreurPosition} // on gère les erreurs de localisation
              />
            )}

            {/* Phase 3 : on capture la position d'arrivée */}
            {phase === 3 && (
              <PositionUtilisateur
                positionTrouvee={gererPositionCapturee}
                miseAJourErreur={gererErreurPosition}
              />
            )}

            {positionDepart && (
              <Marker position={positionDepart} icon={IconePosition}>
                <Popup>
                  <LocationOn /> Position de départ
                </Popup>
              </Marker>
            )}

            {positionArrivee && (
              <Marker position={positionArrivee} icon={IconePosition}>
                <Popup>
                  <Flag /> Position d'arrivée
                </Popup>
              </Marker>
            )}
          </>
        }
      />

      {/* une fois que les deux positions sont enregistrées, on calcule la distance */}
      {positionDepart && positionArrivee && (
        <CalculDistance
          point1={positionDepart}
          point2={positionArrivee}
          mettreAJourDistance={gererDistanceCalculee}
        />
      )}
    </div>
  );
};

export default DistanceLecon1;
