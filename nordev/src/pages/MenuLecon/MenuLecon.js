import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLecons } from "../../api"; 
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Lecon1 from "../../components/Lecon1/Lecon1";
import Lecon2 from "../../components/Lecon2/Lecon2";
import "./MenuLecon.css";

function MenuLecons() {
  const { id } = useParams();
  const [lecons, setLecons] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchLecons = async () => {
      try {
        const data = await getLecons();
        setLecons(data);
      } catch (err) {
        setError("Erreur lors de la récupération des leçons.");
      } finally {
        setLoading(false);
      }
    };

    fetchLecons();
  }, []);

  const lecon = id ? lecons.find((lecon) => lecon.id === parseInt(id)) : null;

  const afficherLecon = () => {
    if (id === "1") return <Lecon1 />;
    if (id === "2") return <Lecon2 />;
    return <p>Leçon non trouvée.</p>;
  };

  if (loading) return <p>Chargement des leçons...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Entete />
      <BarreNavig
        title={id ? `Leçon ${id}` : "Menu des leçons"}
        texteAudio={
          id
            ? `Vous êtes dans la leçon ${id}. Suivez les instructions pour continuer.`
            : "Bienvenue dans le menu des leçons. Sélectionnez une leçon pour commencer."
        }
      />

      {id && lecon ? (
        <div className="lecon-detail">
          <h2>{lecon.titre}</h2>
          <p>{lecon.description}</p>
          <p>
            <strong>Objectif :</strong> {lecon.objectif}
          </p>
          <div>{afficherLecon()}</div>
        </div>
      ) : (
        <div>
          <h2>Choisissez une leçon :</h2>
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
}

export default MenuLecons;
