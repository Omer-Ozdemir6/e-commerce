import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common["Authorization"] = token;
    } else {
        delete axiosInstance.defaults.headers.common["Authorization"];
    }
};

const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 30000,
 
});

export default axiosInstance;