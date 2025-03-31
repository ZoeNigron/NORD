import React, { useState } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Quiz from "../../components/Quiz/Quiz";

const DistanceEtPoints = () => {
  const [quizComplet, setQuizComplet] = useState(false);

  return (
    <div>
      <Entete />
      <BarreNavig
        title="Distances et points cardinaux"
        texteAudio="Bienvenue dans la partie pour apprendre à s'orienter en combinant les distances et les points cardinaux. Complétez le quiz pour avancer."
      />

      <Quiz id={3} onQuizEnd={() => setQuizComplet(true)} />

      {quizComplet && (
        <p> Il n'existe pas encore de leçons !</p>
      )}
    </div>
  );
};

export default DistanceEtPoints;
