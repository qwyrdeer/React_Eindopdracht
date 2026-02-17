import { useEffect, useState } from "react";
import keycloak from "./keycloak";

export default function AuthProvider({ children }) {

    //moeten false zijn
    const [keycloakReady, setKeycloakReady] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {

        keycloak.init({
            onLoad: "check-sso",
            pkceMethod: "S256"
        }).then(authenticated => {

            setIsAuthenticated(authenticated);
            setKeycloakReady(true);

            if (authenticated) {
                console.log("Logged in");
                console.log(keycloak.token);
            }

        });

    }, []);

    if (!keycloakReady) {
        return <div>Loading authentication...</div>;
    }

    return children;
}