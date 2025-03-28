import React, { useState } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../../components/Entete/Entete";
import Quiz from "../../components/Quiz/Quiz";

const Distance = () => {
  const [quizComplet, setQuizComplet] = useState(false);

  const gererQuizComplet = () => setQuizComplet(true);

  return (
    <div>
      <Entete />
      <BarreNavig
        title="Évaluer les distances"
        texteAudio="Bienvenue dans l'évaluation des distances. Complétez le quiz pour avancer."
      />
      
      <Quiz quiz={gererQuizComplet} />

      {quizComplet && (
        <Link to="/menu-lecons">
          <button
            className="bouton"
            onClick={() => console.log("Navigation vers Menu Leçons")}
          >
            Accéder à mes leçons
          </button>
        </Link>
      )}
    </div>
  );
};

export default Distance;
