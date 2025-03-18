import axios from "axios";

const API_BASE_URL = "http://localhost:5039/api";

// Connexion utilisateur
export const connecterUtilisateur = async (identifiants) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/utilisateur/connecter`,
      identifiants
    );
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
    const response = await axios.post(
      `${API_BASE_URL}/utilisateur/creer`,
      data
    );
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
    console.error(
      "Erreur lors de la récupération des données utilisateur:",
      error
    );
    throw new Error("Erreur lors de la récupération des données utilisateur");
  }
};

// Mettre à jour les informations d'un utilisateur spécifique
export const mettreAJourInfosUtilisateur = async (id, utilisateurMisAJour) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/utilisateur/${id}`,
      utilisateurMisAJour
    );
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour des données utilisateur:",
      error
    );
    throw new Error("Erreur lors de la mise à jour des données utilisateur");
  }
};

// Fonction pour obtenir toutes les questions avec leurs réponses
export const obtenirQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des questions:", error);
    return [];
  }
};

// Obtenir toutes les astuces
export const obtenirAstuces = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/astuces`);
    return response.data; // Retourne toutes les astuces
  } catch (error) {
    console.error("Erreur lors de la récupération des astuces :", error);
    return [];
  }
};

// Obtenir une astuce par son ID
export const obtenirAstuceParId = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/astuces/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'astuce :", error);
    throw new Error("Erreur lors de la récupération de l'astuce");
  }
};

// Ajouter une nouvelle astuce
export const ajouterAstuce = async (astuceData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/astuces`, astuceData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'astuce :", error);
    return null;
  }
};

export const modifierAstuce = async (id, nouvelleAstuce) => {
  console.log("ID envoyé :", id);
  console.log("Corps de la requête :", JSON.stringify(nouvelleAstuce, null, 2));
  try {
    const response = await axios.put(
      `${API_BASE_URL}/astuces/${id}`,
      { id, ...nouvelleAstuce },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Réponse de l'API :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'astuce :", error);
    throw new Error("Erreur lors de la mise à jour de l'astuce");
  }
};

// Supprimer une astuce
export const supprimerAstuce = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/astuces/${id}`);
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'astuce :", error);
    return false;
  }
};
