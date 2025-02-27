import { Navigate, Outlet } from "react-router-dom";

const RoutePrivee = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/connexion" />;
};

export default RoutePrivee;
