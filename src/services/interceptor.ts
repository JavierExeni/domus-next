import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_HOST;

const api = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: ""
    }
});

api.interceptors.request.use(
    async (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (typeof window !== "undefined" && error.response?.status === 401) {
            localStorage.clear();
        }
        return Promise.reject(error);
    }
);

export default api;
