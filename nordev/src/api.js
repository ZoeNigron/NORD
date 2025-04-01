import axios from "axios"; // avec axios, la réponse est automatiquement convertie en JSON (si elle est en JSON) et accessible via response.data

const API_BASE_URL = "http://localhost:5039/api";
//const API_BASE_URL = "http://172.20.10.2:5039/api";

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
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des astuces :", error);
    return [];
  }
};

// Fonction pour obtenir les compétences
export const obtenirCompetences = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/competences`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des compétences :", error);
    return [];
  }
};

// Fonction pour obtenir les exercices
export const obtenirExercices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/exercices`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des exercices :", error);
    return [];
  }
};

// Fonction pour obtenir les lecons
export const obtenirLecons = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lecons`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des leçons :", error);
    return [];
  }
};

// Fonction pour obtenir les quiz
export const obtenirQuiz = async (quizId) => {
  console.log("Quiz ID: ", quizId);
  try {
    console.log(`Fetching quiz with ID: ${quizId}`);
    const response = await axios.get(`${API_BASE_URL}/quiz/${quizId}`);
    console.log("Quiz data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error;
  }
};

export const obtenirScore = async (idUtilisateur) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/utilisateur/${idUtilisateur}`);
    return response.data.score; // Récupère uniquement le score
  } catch (error) {
    console.error("Erreur lors de la récupération du score :", error);
    return null; // Retourne null en cas d'erreur
  }
};

// Fonction pour mettre à jour le score
export const mettreAJourScore = (userId, score) => {
  axios
    .post(`${API_BASE_URL}/utilisateur/updateScore`, { userId, score })
    .then((response) => {
      console.log("Score mis à jour", response.data);
    })
    .catch((error) => {
      console.error("Erreur de mise à jour du score", error);
    });
};

// Fonction pour obtenir les meilleurs scores
export const obtenirTopScores = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/utilisateur/topScores`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des meilleurs scores", error);
    throw error;
  }
};
