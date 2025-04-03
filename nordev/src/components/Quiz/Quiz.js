//

import React, { useState, useEffect } from "react";
import { CheckCircle, Cancel, ArrowForward } from "@mui/icons-material";
import { obtenirQuiz } from "../../api";
import "./Quiz.css";

function Quiz({ id, onQuizEnd }) {
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
        const data = await obtenirQuiz(id);
        setQuiz(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du quiz :", error);
      }
    };

    fetchQuiz();
  }, [id]);

  if (!quiz) {
    return <div>Chargement du quiz...</div>;
  }

  if (!quiz.questionsQuiz || quiz.questionsQuiz.length === 0) {
    return <div>Aucune question disponible.</div>;
  }

  const question = quiz.questionsQuiz[questionActuelle]; // Question actuelle

  const selectionReponse = (optionId) => {
    if (!reponseValidee) {
      setReponseSelectionnee(optionId);
    }
  };

  const validationReponse = () => {
    setReponseValidee(true);
    const bonneReponse = question.options.find((option) => option.estCorrecte);
    if (reponseSelectionnee === bonneReponse.id) {
      setScore(score + 1);
    }
  };

  const questionSuivante = () => {
    if (questionActuelle + 1 < quiz.questionsQuiz.length) {
      setQuestionActuelle(questionActuelle + 1);
      setReponseSelectionnee(null);
      setReponseValidee(false);
    } else {
      setQuizComplete(true);
      if (onQuizEnd) onQuizEnd();
    }
  };

  const abandonQuiz = () => {
    setQuizPasse(true);
    if (onQuizEnd) onQuizEnd();
  };

  let message = "";
  let messageClasse = "";
  let texteBonneReponse = "";

  if (reponseValidee) {
    const bonneReponse = question.options.find((option) => option.estCorrecte);

    if (reponseSelectionnee === bonneReponse.id) {
      message = (
        <>
          <CheckCircle className="icone-correct" /> Bravo ! Bonne réponse.
        </>
      );
      messageClasse = "message-correct";
    } else {
      message = (
        <>
          <Cancel className="icone-incorrect" /> Mauvaise réponse.
        </>
      );
      messageClasse = "message-incorrect";
      texteBonneReponse = `La bonne réponse était : "${bonneReponse.texte}"`;
    }
  }

  return (
    <div className="quiz-container">
      <h2>Quiz : {quiz.titre}</h2>

      {!quizComplete && !quizPasse ? (
        <>
          <div className="question-container">
            <h3>{question.question}</h3>

            <div className="options">
              {question.options?.map((option) => (
                <div key={option.id} className="option">
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
              <div className={`message ${messageClasse}`}>
                <p>{message}</p>
                {texteBonneReponse && (
                  <p>
                    <strong>{texteBonneReponse}</strong>
                  </p>
                )}
                <p>
                  <strong>Explication :</strong> {question.explication}
                </p>
              </div>
            )}

            {!reponseValidee && (
              <button
                onClick={validationReponse}
                disabled={!reponseSelectionnee}
              >
                Valider
              </button>
            )}

            {reponseValidee && (
              <button onClick={questionSuivante}>
                <ArrowForward className="icone-suivant" /> Suivant
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="quiz-results">
          <h3>
            Score : {score} / {quiz.questionsQuiz.length}
          </h3>
        </div>
      )}

      {!quizPasse && !quizComplete && (
        <button onClick={abandonQuiz}>Passer le quiz</button>
      )}
    </div>
  );
}

export default Quiz;
