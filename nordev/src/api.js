import axios from "axios";

const API_BASE_URL = "http://localhost:5039/api";

// Connexion utilisateur
export const connecterUtilisateur = async (identifiants) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/utilisateur/connecter`, identifiants);
    if (response.data && response.data.id) {
      localStorage.setItem("utilisateurId", response.data.id);
    }
    return response.data;
  } catch (error) {
    console.error("Erreur de connexion :", error);
    throw error;
  }
};

// Obtenir la liste des utilisateurs
export const obtenirUtilisateurs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/utilisateur`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    return [];
  }
};

// Créer un nouvel utilisateur
export const creerUtilisateur = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/utilisateur/creer`, data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    return null;
  }
};

// Obtenir les informations d'un utilisateur spécifique
export const obtenirInfosUtilisateur = async (id) => {
  try {
    console.log(`Récupération des infos pour l'ID : ${id}`);
    const response = await axios.get(`${API_BASE_URL}/utilisateur/${id}`);
    console.log("Réponse de l'API :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur:", error);
    throw new Error("Erreur lors de la récupération des données utilisateur");
  }
};

// Mettre à jour les informations d'un utilisateur spécifique
export const mettreAJourInfosUtilisateur = async (id, utilisateurMisAJour) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/utilisateur/${id}`, utilisateurMisAJour);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données utilisateur:", error);
    throw new Error("Erreur lors de la mise à jour des données utilisateur");
  }
};
