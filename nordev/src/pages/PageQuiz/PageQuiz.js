// Cette page permet d'afficher un quiz, soit sur les distances, soit sur les points cardinaux, soit sur les deux, en fonction de la compétence sur laquelle l'utilisateur clique. Sur les compétences après la numéro 3, il n'existe pas encore de leçons, elles ont été maquettées et testées lors de mon projet transdiscplinaire mais elles n'étaient pas prévues pour le P2I (cela pourrait représenter une poursuite du projet). On peut tout de même y ajouter des quiz via le Swagger

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Quiz from "../../components/Quiz/Quiz";
import "./PageQuiz.css";

const PageQuiz = () => {
  const { type } = useParams(); // on récupère le paramètre dynamique dans l'URL
  const [quizComplet, setQuizComplet] = useState(false);

  const donneesQuiz = {
    distance: {
      titre: "Évaluer les distances",
      texteAudio: "Bienvenue dans l'évaluation des distances. Complétez le quiz pour avancer.",
      id: 1,
      messageFin: <a href="/menu-lecons"><button className="bouton-acceder-lecons">Accéder à mes leçons</button></a>
    },
    points: {
      titre: "S'orienter avec les points cardinaux",
      texteAudio: "Bienvenue dans la partie pour apprendre à s'orienter avec les points cardinaux. Complétez le quiz pour avancer.",
      id: 2,
      messageFin: <p className="pas-de-lecon"> Il n'existe pas encore de leçons !</p>
    },
    distancePoints: {
      titre: "Distances et points cardinaux",
      texteAudio: "Bienvenue dans la partie pour apprendre à s'orienter en combinant les distances et les points cardinaux. Complétez le quiz pour avancer.",
      id: 3,
      messageFin: <p className="pas-de-lecon"> Il n'existe pas encore de leçons !</p>
    }
  };

  // on sélectionne les données appropriées en fonction du paramètre "type"
  const { titre, texteAudio, id, messageFin } = donneesQuiz[type] || donneesQuiz.distance; // on affiche le quiz sur les distances par défaut s'il y a un problème

  return (
    <div>
      <Entete />
      <BarreNavig titre={titre} texteAudio={texteAudio} />
      <Quiz id={id} gererFinQuiz={() => setQuizComplet(true)} />
      {quizComplet && messageFin}
    </div>
  );
};

export default PageQuiz;
