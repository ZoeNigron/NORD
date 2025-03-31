import React, { useState } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import { Link } from "react-router-dom";
import Entete from "../../components/Entete/Entete";
import Quiz from "../../components/Quiz/Quiz";

const Distance = () => {
  const [quizComplet, setQuizComplet] = useState(false);

  return (
    <div>
      <Entete />
      <BarreNavig
        title="Évaluer les distances"
        texteAudio="Bienvenue dans l'évaluation des distances. Complétez le quiz pour avancer."
      />

      <Quiz id={1} onQuizEnd={() => setQuizComplet(true)} />

      {quizComplet && (
        <Link to="/menu-lecons">
          <button className="bouton">Accéder à mes leçons</button>
        </Link>
      )}
    </div>
  );
};

export default Distance;
