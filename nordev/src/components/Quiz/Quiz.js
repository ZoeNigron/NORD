import React, { useState } from "react";
import { CheckCircle, Cancel, ArrowForward } from "@mui/icons-material";
import questionsQuiz from "../../services/donnees/questionsQuiz";
import "./Quiz.css";

function Quiz({ quiz }) {
  const [questionActuelle, setQuestionActuelle] = useState(0);
  const [reponseSelectionnee, setReponseSelectionnee] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [reponseValidee, setReponseValidee] = useState(false);
  const [isquizPasse, setQuizPasse] = useState(false);

  const question = questionsQuiz[questionActuelle];

  const selectionReponse = (idSelectionne) => {
    if (!reponseValidee) {
      setReponseSelectionnee(idSelectionne);
    }
  };

  const validationReponse = () => {
    setReponseValidee(true);
    if (reponseSelectionnee === question.bonneReponse) {
      setScore(score + 1);
    }
  };

  const questionSuivante = () => {
    setQuestionActuelle(questionActuelle + 1);
    setReponseSelectionnee(null);
    setReponseValidee(false);

    if (questionActuelle === questionsQuiz.length - 1) {
      setQuizComplete(true);
      quiz();
    }
  };

  const abandonQuiz = () => {
    setQuizPasse(true);
    quiz();
  };

  let message = "";
  let messageClasse = "";
  let texteBonneReponse = "";

  if (reponseValidee) {
    if (reponseSelectionnee === question.bonneReponse) {
      message = <><CheckCircle className="icone-correct" /> Bravo ! Vous avez donné la bonne réponse.</>
      messageClasse = "message-correct";
    } else {
      message = <><Cancel className="icone-incorrect" /> Mauvaise réponse.</>;
      messageClasse = "message-incorrect";

      const reponseCorrecte = question.options.find( 
        (option) => option.id === question.bonneReponse
      );
      texteBonneReponse = `La bonne réponse était : "${reponseCorrecte.texte}"`;
    }
  }

  return (
    <div className="quiz-container">
      <h2>Quiz éducatif - Apprendre à évaluer les distances</h2>

      {!quizComplete && !isquizPasse ? (
        <>
          <div className="question-container">
            <h3>{question.question}</h3>
            <div className="options">
              {question.options.map((option) => (
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
                {texteBonneReponse && <p><strong>{texteBonneReponse}</strong></p>}
                <p><strong>Explication :</strong> {question.explication}</p>
              </div>
            )}

            {!reponseValidee && (
              <button onClick={validationReponse} disabled={!reponseSelectionnee}>
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
            Vous avez obtenu {score} sur {questionsQuiz.length} bonnes réponses !
          </h3>
        </div>
      )}

      {!isquizPasse && !quizComplete && (
        <button onClick={abandonQuiz}>Passer le quiz</button>
      )}
    </div>
  );
}

export default Quiz;
