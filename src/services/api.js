import axios from 'axios';

// Créer une instance axios personnalisée
const api = axios.create({
  baseURL: 'http://134.209.124.119/api/auth/',//l'url de l'api
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
  }
  return config;
});

export default api;