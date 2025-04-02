import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connexion from "./pages/Connexion/Connexion";
import Accueil from "./pages/Accueil/Accueil";
import Competence from "./pages/Competence/Competence";
import MenuLecon from "./pages/MenuLecon/MenuLecon";
import PageNonDeveloppee from "./pages/PageNonDeveloppee/PageNonDeveloppee";
import Profil from "./pages/Profil";
import RoutePrivee from "./components/RoutePrivee";
import Astuces from "./pages/Astuces";
import Lecon1 from "./pages/Lecon1/Lecon1";
import Lecon2 from "./pages/Lecon2/Lecon2";
import PageQuiz from "./pages/PageQuiz/PageQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />

        <Route element={<RoutePrivee />}>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/mes-astuces" element={<Astuces />} />
          <Route path="/mes-competences" element={<Competence />} />
          <Route path="/quiz/:type" element={<PageQuiz />} />
          <Route path="/menu-lecons" element={<MenuLecon />} />
          <Route path="/lecon/1" element={<Lecon1 />} />
          <Route path="/lecon/2" element={<Lecon2 />} />
          <Route path="/page-non-developpee" element={<PageNonDeveloppee />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
