import React, { useState, useEffect } from "react";
import { ArrowForward, CheckCircle, Cancel } from "@mui/icons-material";
import { obtenirQuestions } from "../../api";
import "./Quiz.css";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionActuelle, setQuestionActuelle] = useState(0);
  const [reponseSelectionnee, setReponseSelectionnee] = useState(null);
  const [score, setScore] = useState(0);
  const [reponseValidee, setReponseValidee] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [isQuizPasse, setIsQuizPasse] = useState(false); // Nouvel état pour suivre si le quiz est passé

  useEffect(() => {
    // Récupérer les questions lors du chargement du composant
    const fetchQuestions = async () => {
      const data = await obtenirQuestions();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  // Si aucune question n'est récupérée, on affiche un message d'erreur
  if (questions.length === 0) {
    return <div>Erreur : Impossible de récupérer les questions du quiz.</div>;
  }

  const question = questions[questionActuelle];

  // Fonction pour sélectionner une réponse
  const selectionReponse = (idSelectionne) => {
    if (!reponseValidee) {
      setReponseSelectionnee(idSelectionne);
    }
  };

  // Fonction pour valider la réponse sélectionnée
  const validationReponse = () => {
    if (reponseSelectionnee === question.idReponseCorrecte) {
      setScore(score + 1); // On ajoute au score uniquement si la réponse est correcte
    }
    setReponseValidee(true);
  };

  // Fonction pour passer à la question suivante
  const questionSuivante = () => {
    // Si il reste des questions, on passe à la suivante
    if (questionActuelle < questions.length - 1) {
      setQuestionActuelle(questionActuelle + 1);
      setReponseSelectionnee(null);
      setReponseValidee(false);
    } else {
      // Sinon, on termine le quiz
      setQuizComplete(true);
    }
  };

  // Fonction pour abandonner le quiz
  const abandonnerQuiz = () => {
    setIsQuizPasse(true);
  };

  let message = "";
  let messageClasse = "";
  let texteBonneReponse = "";

  // Log des données pour vérifier leur intégrité
  console.log("Question actuelle :", question);
  console.log("Réponses de la question :", question.reponses);
  console.log("ID bonne réponse :", question.idReponseCorrecte);

  if (reponseValidee) {
    if (reponseSelectionnee === question.idReponseCorrecte) {
      message = (
        <>
          <CheckCircle className="icone-correct" /> Bravo ! Vous avez donné la
          bonne réponse.
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

      // Trouver la bonne réponse dans le tableau des options en fonction de l'ID
      const reponseCorrecte = question.reponses.find(
        (option) => option.id === question.idReponseCorrecte
      );
      
      // Vérification de l'existence de la bonne réponse
      if (reponseCorrecte) {
        texteBonneReponse = `La bonne réponse était : "${reponseCorrecte.contenu}"`;
      } else {
        texteBonneReponse = "Erreur : La réponse correcte n'a pas été trouvée.";
      }
    }
  }

  return (
    <div className="quiz-container">
      <h2>Quiz éducatif</h2>

      {!quizComplete && !isQuizPasse ? ( // Affiche le quiz si il n'est pas terminé ou passé
        <>
          <div className="question-container">
            <h3>{question.contenu}</h3>
            <div className="options">
              {question.reponses.map((option) => (
                <div key={option.id} className="option">
                  <input
                    type="radio"
                    id={`option${option.id}`}
                    name="answer"
                    value={option.contenu}
                    checked={reponseSelectionnee === option.id}
                    onChange={() => selectionReponse(option.id)}
                    disabled={reponseValidee}
                  />
                  <label htmlFor={`option${option.id}`}>{option.contenu}</label>
                </div>
              ))}
            </div>

            {reponseValidee && (
              <div className={`message ${messageClasse}`}>
                <p>{message}</p>
                {texteBonneReponse && <p><strong>{texteBonneReponse}</strong></p>}
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

          <button onClick={abandonnerQuiz}>Passer le quiz</button>
        </>
      ) : (
        <div className="quiz-results">
          {isQuizPasse ? (
            <h3>Vous avez abandonné le quiz.</h3> // Message si le quiz est abandonné
          ) : (
            <h3>
              Vous avez obtenu {score} sur {questions.length} bonnes réponses !
            </h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
