// Ce composant permet de créer le bouton de déconnexion que j'ai affiché sur la page du profil, en dessous du formulaire permettant de voir et de modifier ses informations personnelles

import { useNavigate } from "react-router-dom";
import "./BoutonDeconnexion.css";

function BoutonDeconnexion() {
  const navigate = useNavigate(); // on utilise le hook useNavigate

  const gererDeconnexion = () => { // on enlève le token et l'état "estAuthentifié" du localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("estAuthentifie");
    //localStorage.removeItem("id");
    navigate("/");
  };

  return <button className="bouton-deconnexion" onClick={gererDeconnexion}>Se déconnecter</button>;
}

export default BoutonDeconnexion;
