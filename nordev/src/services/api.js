import axios from "axios"; // avec axios, la réponse est automatiquement convertie en JSON et accessible via reponse.data

const API_BASE_URL = "http://localhost:5039/api"; // le lien pour relier l'API avec le localhost
//const API_BASE_URL = "http://192.168.1.101:5039/api"; // le lien pour relier l'API et visualiser mon application depuis mon téléphone, à condition d'être sous le même réseau wifi que mon PC
//const API_BASE_URL = "http://172.20.10.2:5039/api";
//const API_BASE_URL = "http://192.168.0.42:5039/api";

// Fonction pour connecter un utilisateur (utilisée dans le composant "ConnexionCompte")
export const connecterUtilisateur = async (identifiants) => {
  try {
    const reponse = await axios.post(
      `${API_BASE_URL}/utilisateur/connecter`,
      identifiants
    );
    console.log("DATA retour connexion :", reponse.data);
    if (reponse.data && reponse.data.id) {
      localStorage.setItem("utilisateurId", reponse.data.id);
    }
    return reponse.data;
  } catch (error) {
    console.error("Erreur de connexion :", error);
    throw error;
  }
};

// Fonction pour créer un nouvel utilisateur (utilisée dans le composant "CreationCompte")
export const creerUtilisateur = async (data) => {
  try {
    const reponse = await axios.post(`${API_BASE_URL}/utilisateur/creer`, data);
    return reponse.data;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    return null;
  }
};

// Fonction pour obtenir les informations d'un utilisateur spécifique (utilisée dans le composant "ProfilUtilisateur" et dans la page "MenuLecon")
export const obtenirInfosUtilisateur = async (utilisateurId) => {
  try {
    console.log(`Récupération des infos pour l'id : ${utilisateurId}`);
    const reponse = await axios.get(
      `${API_BASE_URL}/utilisateur/${utilisateurId}`
    );
    console.log("Réponse de l'API :", reponse.data);
    return reponse.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur:",
      error
    );
    throw new Error("Erreur lors de la récupération des données utilisateur");
  }
};

// Fonction pour mettre à jour les informations d'un utilisateur spécifique (utilisée dans le composant "ProfilUtilisateur")
export const mettreAJourInfosUtilisateur = async (
  utilisateurId,
  utilisateurMisAJour
) => {
  try {
    const reponse = await axios.put(
      `${API_BASE_URL}/utilisateur/${utilisateurId}`,
      utilisateurMisAJour
    );
    return reponse.data;
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
    const reponse = await axios.get(`${API_BASE_URL}/astuces`);
    return reponse.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des astuces :", error);
    return [];
  }
};

// Fonction pour obtenir les compétences (utilisée dans la page "Competence")
export const obtenirCompetences = async () => {
  try {
    const reponse = await axios.get(`${API_BASE_URL}/competences`);
    return reponse.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des compétences :", error);
    return [];
  }
};

// Fonction pour obtenir les exercices (utilisée dans la page "Lecon1")
export const obtenirExercices = async () => {
  try {
    const reponse = await axios.get(`${API_BASE_URL}/exercices`);
    return reponse.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des exercices :", error);
    return [];
  }
};

// Fonction pour obtenir les lecons (utilisée dans la page "MenuLecons")
export const obtenirLecons = async () => {
  try {
    const reponse = await axios.get(`${API_BASE_URL}/lecons`);
    return reponse.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des leçons :", error);
    return [];
  }
};

// Fonction pour obtenir une leçon, par son id (utilisée dans les pages "Lecon1", "Lecon2" et "MenuLecon")
export const obtenirLecon = async (leconId) => {
  try {
    console.log(`On récupère la leçon dont l'id est : ${leconId}`);
    const reponse = await axios.get(`${API_BASE_URL}/lecons/${leconId}`);
    console.log("Données leçon :", reponse.data);
    return reponse.data;
  } catch (error) {
    console.error("Erreur récupération leçon :", error);
    throw error;
  }
};

// Fonction pour obtenir les quiz (utilisée dans le composant "Quiz")
export const obtenirQuiz = async (quizId) => {
  try {
    console.log(`On récupère le quiz dont l'id est : ${quizId}`);
    const reponse = await axios.get(`${API_BASE_URL}/quiz/${quizId}`);
    console.log("Données quiz :", reponse.data);
    return reponse.data;
  } catch (error) {
    console.error("Erreur récupération quiz :", error);
    throw error;
  }
};

// Fonction pour mettre à jour les leçons validées par l'utilisateur (utilisée dans le composant "AnalyseEstimation")
export const mettreAJourLeconsValidees = async (utilisateurId, leconId) => {
  try {
    // on récupère l'utilisateur
    const recupUtilisateur = await axios.get(
      `${API_BASE_URL}/utilisateur/${utilisateurId}`
    );
    const utilisateur = recupUtilisateur.data;

    // on merge sans doublons les nouvelles leçons validées avec celles déjà validées
    const nouvellesLecons = Array.from(
      new Set([...(utilisateur.leconsvalidees || []), leconId])
    );

    // on met à jour dans l'API
    const reponse = await axios.put(
      `${API_BASE_URL}/utilisateur/${utilisateurId}`,
      {
        ...utilisateur, // pour inclure les autres données de l'utilisateur
        leconsvalidees: nouvellesLecons,
      }
    );

    return reponse.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour des leçons validées", error);
    console.error("Détails:", error.reponse?.data);
    throw error;
  }
};
