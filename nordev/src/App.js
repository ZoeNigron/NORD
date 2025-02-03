import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Competence from "./pages/Competence";
import Distance from "./pages/Distance";
import MenuLecon from "./pages/MenuLecon";
import Lecon2 from "./pages/Lecon2";
//import Lecon1 from "./pages/Lecon1";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/mes-competences" element={<Competence />} />
        <Route path="/evaluer-les-distances" element={<Distance />} />
        <Route path="/menu-lecons" element={<MenuLecon />} />
        <Route path="/menu-lecons/:id" element={<MenuLecon />} />
        <Route path="/faire-lecon/:id" element={<Lecon2 />} />
      </Routes>
    </Router>
  );
}


export default App;
