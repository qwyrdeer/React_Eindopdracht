import axios from 'axios';
import keycloak from "../auth/Keycloak.js";

axios.interceptors.request.use(
    (config) => {
        if (keycloak.token) {
            config.headers.Authorization = `Bearer ${keycloak.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await keycloak.refreshToken(30);
                originalRequest.headers.Authorization = `Bearer ${keycloak.token}`;
                return axios(originalRequest);
            } catch (refreshError) {
                keycloak.logout();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axios;