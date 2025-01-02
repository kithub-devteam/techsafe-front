import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingLoagout, setloadingLoagout] = useState(false);

    const login = async (credentials = "") => {
        try {
            const response = await api.post("auth/login/", {
                login: credentials.identifier,
                password: credentials.password
            });

            if (response.status === 200) {
                localStorage.setItem("access", response.data.access);
                localStorage.setItem("refresh", response.data.refresh);
                await fetchUserData();
                // setUser(response.data.user);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erreur de connexion:', error);
            return false;
        }
    };

    const fetchUserData = async () => {
        try {
            const response = await api.get("auth/user-from-token/");
            if (response.status === 200) {
                setUser(response.data.user);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
        }
    };

    const logout = async () => {
        setloadingLoagout(true);
        try {
            const response = await api.post("auth/logout/");
            if (response.status === 200) {
                // setUser(response.data.user);
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                localStorage.removeItem("success");
                setUser(null);
                setloadingLoagout(false);
            }else{
                console.error('Erreur lors de la récupération des données utilisateur:', response);
                setloadingLoagout(false);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
            setloadingLoagout(false);
        }

        // Ajoutez ici la logique de déconnexion (ex: supprimer le token du localStorage)
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const accessToken = localStorage.getItem("access");
                if (accessToken) {
                    await fetchUserData();
                }
                setLoading(false);
            } catch (error) {
                console.error('Erreur de vérification auth:', error);
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const value = {
        user,
        loading,
        login,
        logout,
        setUser,
        loadingLoagout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé dans un AuthProvider');
    }
    return context;
};
