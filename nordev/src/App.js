import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import BarreNavig from "./components/Navigation/BarreNavig";
import Connexion from "./pages/Connexion";
import Accueil from "./pages/Accueil/Accueil";
import Competence from "./pages/Competence/Competence";
import Distance from "./pages/Distance/Distance";
import MenuLecon from "./pages/MenuLecon/MenuLecon";
import PageNonDeveloppee from "./pages/PageNonDeveloppee";
import Profil from "./pages/Profil";
import RoutePrivee from "./components/RoutePrivee";
import Astuces from "./pages/Astuces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />

        <Route element={<RoutePrivee />}>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/mes-astuces" element={<Astuces />} />
          <Route path="/mes-competences" element={<Competence />} />
          <Route path="/evaluer-les-distances" element={<Distance />} />
          <Route path="/menu-lecons" element={<MenuLecon />} />
          <Route path="/menu-lecons/:id" element={<MenuLecon />} />
          <Route path="/page-non-developpee" element={<PageNonDeveloppee />} />
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;