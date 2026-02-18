import { createContext, useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ isAuth: false });

    useEffect(() => {
        const checkToken = async () => {
            try {
                const kc = new Keycloak({
                    url: 'http://localhost:9090',
                    realm: 'galacticEndgame',
                    clientId: 'galactic-frontend'
                });

                await kc.init({ onLoad: 'check-sso' });

                if (kc.authenticated) {

                    await kc.updateToken(60);

                    await fetch("http://localhost:8080/users/me", {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${kc.token}`
                        }
                    });
                }
                setAuth({
                    isAuth: kc.authenticated,
                    token: kc.token,
                    kc: kc
                });

            } catch (error) {
                console.error('Auth check failed:', error);
                setAuth({ isAuth: false });
            }
        };

        checkToken();
    }, []);

    const login = () => {
        auth.kc?.login();
        setAuth({ isAuth: true });
    };

    const logout = () => {
        auth.kc?.logout();
        setAuth({ isAuth: false });
    };

    return (
        <AuthContext.Provider value={{ auth, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
}