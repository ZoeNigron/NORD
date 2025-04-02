import { useNavigate } from "react-router-dom";

function BoutonDeconnexion() {
  const navigate = useNavigate();

  const gererDeconnexion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return <button className="bouton-deconnexion" onClick={gererDeconnexion}>Se déconnecter</button>;
}

export default BoutonDeconnexion;
