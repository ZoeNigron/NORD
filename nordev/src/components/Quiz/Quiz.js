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
  const [isquizPasse, setQuizPasse] = useState(false); // Si l'utilisateur veut passer le quiz

  const question = questionsQuiz[questionActuelle]; // On récupère la question actuelle

  // Fonction appelée lorsqu'on sélectionne une réponse
  const selectionReponse = (idSelectionne) => {
    if (!reponseValidee) {
      setReponseSelectionnee(idSelectionne);
    }
  };

  // Fonction pour valider la réponse sélectionnée
  const validationReponse = () => {
    setReponseValidee(true);
    if (reponseSelectionnee === question.bonneReponse) {
      setScore(score + 1); // +1 au score si la réponse est correcte
    }
  };

  // Fonction pour passer à la question suivante
  const questionSuivante = () => {
    setQuestionActuelle(questionActuelle + 1);
    setReponseSelectionnee(null);
    setReponseValidee(false);

    if (questionActuelle === questionsQuiz.length - 1) { // On vérifie si c'était la dernière question
      setQuizComplete(true);
      quiz(); // On appelle la fonction quiz pour signaler la fin
    }
  };

  // Fonction pour abandonner le quiz
  const abandonQuiz = () => {
    setQuizPasse(true);
    quiz(); // Appel de la fonction quiz (fin du quiz ou redirection si nécessaire)
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

      const reponseCorrecte = question.options.find( // On trouve la bonne réponse dans les options
        (option) => option.id === question.bonneReponse
      );
      texteBonneReponse = `La bonne réponse était : "${reponseCorrecte.texte}"`;
    }
  }

  return (
    <div className="quiz-container">
      <h2>Quiz éducatif - Apprendre à évaluer les distances</h2>

      {!quizComplete && !isquizPasse ? ( // Affiche le quiz si ce n'est pas terminé et pas passé
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
                    disabled={reponseValidee} // On désactive les boutons après validation
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

            {/* Affichage du bouton Valider si aucune réponse n'est encore validée */}
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
        <button onClick={abandonQuiz}>Passer le quiz</button> // Affiche le bouton Passer le quiz
      )}
    </div>
  );
}

export default Quiz; //
