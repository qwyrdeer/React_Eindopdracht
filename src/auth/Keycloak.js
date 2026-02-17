import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:9090",
    realm: "galacticEndgame",
    clientId: "galactic-frontend"
});

export default keycloak;