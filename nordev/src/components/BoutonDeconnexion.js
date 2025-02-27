import { useNavigate } from "react-router-dom";

function BoutonDeconnexion() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    navigate("/connexion");
  };

  return <button onClick={handleLogout}>Se déconnecter</button>;
}

export default BoutonDeconnexion;
