import axios from "axios"; // avec axios, la réponse est automatiquement convertie en JSON et accessible via response.data

const API_BASE_URL = "http://localhost:5039/api"; // le lien pour relier l'API avec le localhost
//const API_BASE_URL = "http://172.20.10.2:5039/api"; // le lien pour relier l'API et visualiser mon application depuis mon téléphone, à condition d'être sous le même réseau wifi que mon PC

// Fonction pour connecter un utilisateur (utilisée dans le composant "ConnexionCompte")
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

// Fonction pour créer un nouvel utilisateur (utilisée dans le composant "CreationCompte")
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

// Fonction pour obtenir les informations d'un utilisateur spécifique (utilisée dans le composant "ProfilUtilisateur" et dans la page "MenuLecon")
export const obtenirInfosUtilisateur = async (id) => {
  try {
    console.log(`Récupération des infos pour l'id : ${id}`);
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

// Fonction pour mettre à jour les informations d'un utilisateur spécifique (utilisée dans le composant "ProfilUtilisateur")
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

// Fonction pour obtenir toutes les astuces (utilisée dans les composants "Astuce" et "GestionAstuces")
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

// Fonction pour obtenir une leçon (par son id)
export const obtenirLecon = async (leconId) => {
  try {
    console.log(`On récupère la leçon dont l'id est : ${leconId}`);
    const response = await axios.get(`${API_BASE_URL}/lecons/${leconId}`);
    console.log("Données leçon :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur récupération leçon :", error);
    throw error;
  }
};

// Fonction pour obtenir les quiz
export const obtenirQuiz = async (quizId) => {
  try {
    console.log(`On récupère le quiz dont l'id est : ${quizId}`);
    const response = await axios.get(`${API_BASE_URL}/quiz/${quizId}`);
    console.log("Données quiz :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur récupération quiz :", error);
    throw error;
  }
};

export const obtenirScore = async (idUtilisateur) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/utilisateur/${idUtilisateur}`
    );
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

export const mettreAJourLeconsValidees = async (id, leconId) => {
  try {
    // Étape 1 : récupérer l'utilisateur
    const userRes = await axios.get(`${API_BASE_URL}/utilisateur/${id}`);
    const utilisateur = userRes.data;

    // Étape 2 : merger sans doublons
    const nouvellesLecons = Array.from(new Set([
      ...(utilisateur.leconsvalidees || []),
      leconId
    ]));

    // Étape 3 : mise à jour
    const response = await axios.put(`${API_BASE_URL}/utilisateur/${id}`, {
      ...utilisateur, // inclure les autres champs
      leconsvalidees: nouvellesLecons,
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour des leçons validées", error);
    console.error("Détails:", error.response?.data);
    throw error;
  }
};

