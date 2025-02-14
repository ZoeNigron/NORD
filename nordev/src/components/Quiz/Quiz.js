import React, { useState } from "react";
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

  const handleAnswerChange = (idSelectionne) => {
    if (!reponseValidee) {
      setReponseSelectionnee(idSelectionne);
    }
  };

  const handleValidateAnswer = () => {
    setReponseValidee(true);
    if (reponseSelectionnee === question.bonneReponse) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setQuestionActuelle(questionActuelle + 1);
    setReponseSelectionnee(null);
    setReponseValidee(false);

    if (questionActuelle === questionsQuiz.length - 1) {
      setQuizComplete(true);
      quiz();
    }
  };

  const handleSkipQuiz = () => {
    setQuizComplete(true);
    setQuizPasse(true);
    quiz();
  };

  let message = "";
  let messageClass = "";
  let texteBonneReponse = "";

  if (reponseValidee) {
    if (reponseSelectionnee === question.bonneReponse) {
      message = "🎯 Bravo ! Vous avez donné la bonne réponse.";
      messageClass = "message-correct";
    } else {
      message = "❌ Mauvaise réponse.";
      messageClass = "message-incorrect";

      const correctAnswer = question.options.find(
        (option) => option.id === question.bonneReponse
      );
      texteBonneReponse = `La bonne réponse était : "${correctAnswer.text}"`;
    }
  }

  return (
    <div className="quiz-container">
      <h2>Quiz éducatif - Apprendre à évaluer les distances</h2>
      {!quizComplete ? (
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
                    value={option.text}
                    checked={reponseSelectionnee === option.id}
                    onChange={() => handleAnswerChange(option.id)}
                    disabled={reponseValidee}
                  />
                  <label htmlFor={`option${option.id}`}>{option.text}</label>
                </div>
              ))}
            </div>

            {reponseValidee && (
              <div className={`message ${messageClass}`}>
                <p>{message}</p>
                {texteBonneReponse && <p><strong>{texteBonneReponse}</strong></p>}
                <p><strong>Explication :</strong> {question.explication}</p>
              </div>
            )}

            {!reponseValidee && (
              <button onClick={handleValidateAnswer} disabled={!reponseSelectionnee}>
                Valider
              </button>
            )}

            {reponseValidee && (
              <button onClick={handleNextQuestion}>Suivant</button>
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

      {!isquizPasse && (
        <button onClick={handleSkipQuiz}>Passer le quiz</button>
      )}
    </div>
  );
}

export default Quiz;
