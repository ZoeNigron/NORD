import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connexion from "./pages/AvecConnexion/Connexion";
import Accueil from "./pages/AvecConnexion/Accueil/Accueil";
import Competence from "./pages/AvecConnexion/Competence/Competence";
import Distance from "./pages/AvecConnexion/Distance/Distance";
import MenuLecon from "./pages/AvecConnexion/MenuLecon/MenuLecon";
import PageNonDeveloppee from "./pages/AvecConnexion/PageNonDeveloppee";
import Profil from "./pages/AvecConnexion/Profil";
import RoutePrivee from "./components/RoutePrivee";
import Astuces from "./pages/AvecConnexion/Astuces";

import AccueilSansCo from "./pages/SansConnexion/AccueilSansCo/AccueilSansCo";
import CompetenceSansCo from "./pages/SansConnexion/CompetenceSansCo/CompetenceSansCo";
import DistanceSansCo from "./pages/SansConnexion/DistanceSansCo/DistanceSansCo";
import MenuLeconSansCo from "./pages/SansConnexion/MenuLeconSansCo/MenuLeconSansCo";
import PageNonDeveloppeeSansCo from "./pages/SansConnexion/PageNonDeveloppeeSansCo";

import ChoixConnexion from "./pages/ChoixConnexion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoixConnexion />} />

        <Route path="/connexion" element={<Connexion />} />
        
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

        <Route path="/accueil-sans-connexion" element={<AccueilSansCo />} />
        <Route path="/mes-competences-sans-connexion" element={<CompetenceSansCo />} />
        <Route path="/evaluer-les-distances-sans-connexion" element={<DistanceSansCo />} />
        <Route path="/menu-lecons-sans-connexion" element={<MenuLeconSansCo />} />
        <Route path="/page-non-developpee-sans-connexion" element={<PageNonDeveloppeeSansCo />} />
      </Routes>
    </Router>
  );
}

export default App;