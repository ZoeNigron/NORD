import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Créer le contexte d'authentification
export const AuthContext = createContext();

// Fournisseur de contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [estConnecte, setEstConnecte] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté à partir du localStorage ou d'une API
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    setEstConnecte(isAuthenticated);
  }, []);

  const connecterUtilisateur = () => {
    localStorage.setItem("isAuthenticated", "true");
    setEstConnecte(true);
  };

  const deconnecterUtilisateur = () => {
    localStorage.removeItem("isAuthenticated");
    setEstConnecte(false);
    navigate("/connexion"); // Rediriger vers la page de connexion
  };

  return (
    <AuthContext.Provider value={{ estConnecte, connecterUtilisateur, deconnecterUtilisateur }}>
      {children}
    </AuthContext.Provider>
  );
};
