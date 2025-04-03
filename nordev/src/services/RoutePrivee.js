// Ce composant gère l'accès aux routes protégées de l'application. Il vérifie si un token d'authentification est présent dans le localStorage. Si le token est présent, cela signifie que l'utilisateur est connecté, et l'outlet (c'est-à-dire la page "enfant") sera affichée. Si le token est absent, l'utilisateur sera redirigé vers la page de connexion

import { Navigate, Outlet } from "react-router-dom"; // on importe les composants nécessaires de react-router-dom

const RoutePrivee = () => {
  const token = localStorage.getItem("token"); // on récupère le token d'authentification depuis le localStorage

  // si le token est présent, on affiche la page suivante et sinon, on redirige l'utilisateur vers la page de connexion
  return token ? <Outlet /> : <Navigate to="/connexion" />;
};

export default RoutePrivee;
