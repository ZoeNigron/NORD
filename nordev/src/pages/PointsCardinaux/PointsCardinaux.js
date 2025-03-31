import React, { useState } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Quiz from "../../components/Quiz/Quiz";

const PointsCardinaux = () => {
  const [quizComplet, setQuizComplet] = useState(false);

  return (
    <div>
      <Entete />
      <BarreNavig
        title="S'orienter avec les points cardinaux"
        texteAudio="Bienvenue dans la partie pour apprendre à s'orienter avec les points cardinaux. Complétez le quiz pour avancer."
      />

      <Quiz id={2} onQuizEnd={() => setQuizComplet(true)} />

      {quizComplet && (
        <p> Il n'existe pas encore de leçons !</p>
      )}
    </div>
  );
};

export default PointsCardinaux;
