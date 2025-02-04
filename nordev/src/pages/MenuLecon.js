import React from "react";
import { useParams, Link } from "react-router-dom";
import BarreNavig from "../components/Navigation/BarreNavig";
import lecons from "../services/lecons";
import Entete from "../components/Entete/Entete";
import Lecon1 from "./Lecon1";
import Lecon2 from "./Lecon2";
import "./MenuLecon.css";

function MenuLecons () {
  const { id } = useParams();
  const lecon = id ? lecons.find((lecon) => lecon.id === parseInt(id)) : null;

  const renderLecon = () => {
    if (id === "1") return <Lecon1 />;
    if (id === "2") return <Lecon2 />;
    return <p>Leçon non trouvée.</p>;
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
};

export default MenuLecons;
