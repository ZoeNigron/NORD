// Ce composant permet d'afficher un quiz interactif que l'on récupère de l'API, basé sur un id donné (car on affiche un quiz différent par compétences, avant de passer à la leçon)
// En entrée, le composant prend l'identifiant du quiz et la fonction "gererFinQuiz" pour signaler la fin du quiz
// En sortie, il affiche les questions, gère les réponses de l'utilisateur et affiche le score final

import React, { useState, useEffect } from "react";
import { CheckCircle, Cancel, ArrowForward } from "@mui/icons-material";
import { obtenirQuiz } from "../../services/api";
import "./Quiz.css";

function Quiz({ id, gererFinQuiz }) {
  const [quiz, setQuiz] = useState(null);
  const [questionActuelle, setQuestionActuelle] = useState(0);
  const [reponseSelectionnee, setReponseSelectionnee] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [reponseValidee, setReponseValidee] = useState(false);
  const [quizPasse, setQuizPasse] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await obtenirQuiz(id); // on appelle l'API pour récupérer le quiz
        setQuiz(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du quiz :", error);
      }
    };

    fetchQuiz();
  }, [id]); // il y a une dépendance à l'id du quiz, on recharge les données si l'id change

  if (!quiz) {
    return <div>Chargement du quiz...</div>;
  }

  // on vérifie si le quiz contient des questions, sinon affiche un message d'erreur
  if (!quiz.questionsQuiz || quiz.questionsQuiz.length === 0) {
    return <div>Aucune question disponible.</div>;
  }

  const question = quiz.questionsQuiz[questionActuelle]; // on récupère la question actuelle

  const selectionReponse = (optionId) => {
    // fonction pour sélectionner une réponse
    if (!reponseValidee) {
      setReponseSelectionnee(optionId);
    }
  };

  const validationReponse = () => {
    // fonction pour valider la réponse sélectionnée
    setReponseValidee(true);
    const bonneReponse = question.options.find((option) => option.estCorrecte);
    if (reponseSelectionnee === bonneReponse.id) {
      setScore(score + 1); // on augmente le score de 1 si la réponse est correcte
    }
  };

  const questionSuivante = () => {
    // fonction pour passer à la question suivante ou terminer le quiz
    if (questionActuelle + 1 < quiz.questionsQuiz.length) {
      setQuestionActuelle(questionActuelle + 1);
      setReponseSelectionnee(null);
      setReponseValidee(false);
    } else {
      setQuizComplete(true);
      if (gererFinQuiz) gererFinQuiz();
    }
  };

  const abandonQuiz = () => {
    // fonction pour abandonner le quiz
    setQuizPasse(true);
    if (gererFinQuiz) gererFinQuiz();
  };

  let message = "";
  let messageClasse = "";
  let texteBonneReponse = "";

  if (reponseValidee) {
    const bonneReponse = question.options.find((option) => option.estCorrecte);

    if (reponseSelectionnee === bonneReponse.id) {
      message = (
        <>
          <CheckCircle className="quiz-icone-correcte" /> Bravo ! Bonne réponse.
        </>
      );
      messageClasse = "quiz-message-correct";
    } else {
      message = (
        <>
          <Cancel className="quiz-icone-incorrecte" /> Mauvaise réponse.
        </>
      );
      messageClasse = "quiz-message-incorrect";
      texteBonneReponse = `La bonne réponse était : "${bonneReponse.texte}"`;
    }
  }

  return (
    <div className="quiz-contenu">
      <h2>Quiz : {quiz.titre}</h2>

      {!quizComplete && !quizPasse ? (
        <>
          <div className="question-quiz-contenu">
            <h3>{question.question}</h3>

            <div className="options-quiz">
              {question.options?.map((option) => (
                <div key={option.id} className="option-quiz">
                  <input
                    type="radio"
                    id={`option${option.id}`}
                    name="answer"
                    value={option.texte}
                    checked={reponseSelectionnee === option.id}
                    onChange={() => selectionReponse(option.id)}
                    disabled={reponseValidee}
                  />
                  <label htmlFor={`option${option.id}`}>{option.texte}</label>
                </div>
              ))}
            </div>

            {reponseValidee && (
              <div className={`${messageClasse}`}>
                <p>{message}</p>
                {texteBonneReponse && (
                  <p>
                    <strong>{texteBonneReponse}</strong>
                  </p>
                )}
                <p>
                  <strong>Explication : </strong> {question.explication}
                </p>
              </div>
            )}

            {reponseSelectionnee &&
              !reponseValidee && ( // on affiche le bouton "Valider" qu'à partir du moment où l'on a sélectionné une réponse
                <button
                  className="bouton-valider-quiz"
                  onClick={validationReponse}
                >
                  Valider
                </button>
              )}

            {reponseValidee && (
              <button className="bouton-suivant" onClick={questionSuivante}>
                <ArrowForward className="icone-bouton-suivant" /> Suivant
              </button>
            )}
          </div>
        </>
      ) : (
        // on affiche le score final une fois le quiz terminé
        <div className="quiz-resultat">
          <h3>
            Score : {score} / {quiz.questionsQuiz.length}
          </h3>
        </div>
      )}

      {!quizPasse && !quizComplete && (
        <button className="bouton-passer-quiz" onClick={abandonQuiz}>
          Passer le quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;
