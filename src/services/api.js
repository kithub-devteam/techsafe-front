import axios from 'axios';

// Créer une instance axios personnalisée
const api = axios.create({
  baseURL: 'http://159.223.191.121/api/auth/',//l'url de l'api
  headers: {
    'Content-Type': 'application/json',//le type de contenu de la requête
    "Accept": "application/json",//pour permettre l'envoi de cookies
  }
});

// Intercepteur pour ajouter des headers dynamiques (comme le token)
api.interceptors.request.use(config => {
  const token = localStorage.getItem('access');//le token de l'utilisateur
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;//le token de l'utilisateur
  }else{
    console.log("no token detected")
  }
  return config;
}, error => {
  // Gestion des erreurs de requête
  return Promise.reject(error);
});

// Intercepteur pour gérer les réponses
api.interceptors.response.use(response => {
  return response;
}, error => {
  // Gestion des erreurs de réponse
  console.error("Une erreur s'est produite :", error);
  return Promise.reject(error);
});

export default api;