import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Competence from "./pages/Competence/Competence";
import Distance from "./pages/Distance";
import MenuLecon from "./pages/MenuLecon/MenuLecon";
import PageNonDeveloppee from "./pages/PageNonDeveloppee";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/mes-competences" element={<Competence />} />
        <Route path="/page-non-developpee" element={<PageNonDeveloppee/>} />
        <Route path="/evaluer-les-distances" element={<Distance />} />
        <Route path="/menu-lecons" element={<MenuLecon />} />
        <Route path="/menu-lecons/:id" element={<MenuLecon />} />
      </Routes>
    </Router>
  );
}

export default App;