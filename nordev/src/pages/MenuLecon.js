/*import React from "react";
import { Link } from "react-router-dom"; // Import du Link pour la navigation

class MenuLecon extends React.Component {
  render() {
    const { lessons, onSelectLesson } = this.props;

    return (
      <div>
        <h2>Menu des Leçons</h2>
        <ul>
          {lessons.map((lesson, index) => (
            <li key={lesson.id}>
              {/* Utilisation du Link pour créer des liens */
              /*<Link
                to={`/suivi/${lesson.id}`} // Lien vers la page de suivi de la leçon
                onClick={() => onSelectLesson(lesson)} // Appel de la fonction onSelectLesson
                style={{
                  display: "inline-block", // Pour s'assurer que le texte est sur une seule ligne
                  cursor:
                    index !== 0 && !lessons[index - 1].validated
                      ? "not-allowed"
                      : "pointer", // Empêcher le clic si la leçon précédente n'est pas validée
                  textDecoration:
                    index !== 0 && !lessons[index - 1].validated
                      ? "line-through"
                      : "none", // L'apparence de la leçon si non validée
                  color:
                    index !== 0 && !lessons[index - 1].validated
                      ? "grey"
                      : "black", // Couleur grise si non validée
                }}
              >
                {lesson.name} -{" "}
                {lesson.validated ? "✅ Validée" : "❌ Non validée"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MenuLecon;*/

// src/pages/MenuLecons.js
import React from "react";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import { Link } from "react-router-dom";

const MenuLecon = () => {
  return (
    <div>
      <BarreNavig title="Menu des Leçons" backLink="/evaluer-les-distances" homeLink="/" />
      <h1>Menu des Leçons</h1>
      <Link to="/lecon/1">
        <button>Leçon 1 : Introduction</button>
      </Link>
      {/* Ajouter d'autres leçons si nécessaire */}
    </div>
  );
};

export default MenuLecon;

