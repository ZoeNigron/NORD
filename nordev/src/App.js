/*import React from "react";
import SuiviLecon from "./components/SuiviLecon";

const lessons = [
  { id: 1, name: "Leçon 1 : Introduction au suivi", validated: false },
  { id: 2, name: "Leçon 2 : Suivi avancé", validated: false },
  { id: 3, name: "Leçon 3 : Analyse des distances", validated: false },
];

function validateLesson(id) {
  // Exemple de logique de validation : vous pouvez remplacer par une API ou un système plus complexe
  const lessonIndex = lessons.findIndex((lesson) => lesson.id === id);
  if (lessonIndex !== -1) {
    lessons[lessonIndex].validated = true;
  }
}

function App() {
  return (
    <div>
      <h1>Application de Suivi de Leçons</h1>
      <SuiviLecon lessons={lessons} validateLesson={validateLesson} disabled={false} />
    </div>
  );
}

export default App;*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Utilisez Routes au lieu de Switch
import Accueil from "./pages/Accueil";
import Competence from "./pages/Competence";
import Distance from "./pages/Distance";
import MenuLecon from "./pages/MenuLecon";
import FaireLecon from "./pages/FaireLecon";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} /> {/* Utilisez element au lieu de component */}
        <Route path="/mes-competences" element={<Competence />} />
        <Route path="/evaluer-les-distances" element={<Distance />} />
        <Route path="/menu-lecons" element={<MenuLecon />} /> {/* Route vers MenuLecon */}
        <Route path="/menu-lecons/:id" element={<MenuLecon />} />
        <Route path="/faire-lecon/:id" element={<FaireLecon />} /> {/* Route vers FaireLecon */}
      </Routes>
    </Router>
  );
}

export default App;
