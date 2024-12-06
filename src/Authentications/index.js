import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (credentials) => {
        try {
            // Ici, vous implementerez votre logique d'authentification
            // const response = await votreFonctionLogin(credentials);
            setUser("janeiro hurley");
            return true;
        } catch (error) {
            console.error('Erreur de connexion:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        // Ajoutez ici la logique de déconnexion (ex: supprimer le token du localStorage)
    };

    useEffect(() => {
        // Vérifier si l'utilisateur est déjà connecté au chargement
        const checkAuth = async () => {
            try {
                // Vérifiez ici le token stocké ou autre méthode d'auth persistante
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
