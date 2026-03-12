import axiosInstance, { setAuthToken } from "../../api/axiosInstance";
import md5 from "blueimp-md5";
import { set } from "react-hook-form";
import { toast } from "react-toastify";


export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';


export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });



export const fetchRoles = () => (dispatch, getState) => {
    const { roles } = getState().client;
    
    if (roles.length === 0) {
        axiosInstance.get("/roles")
            .then((response) => {
                dispatch(setRoles(response.data));
            })
            .catch((error) => {
                console.error("Error fetching roles:", error);
            });
    }
};

export const verifyToken = () => (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setAuthToken(token);

    return axiosInstance.get("/verify")
        .then((res) => {
            const user = res.data;
            const hash = md5(user.email.trim().toLowerCase());
            user.avatar = `https://www.gravatar.com/avatar/${hash}?s=200`;
            dispatch(setUser(user));
            localStorage.setItem("token", user.token);
            setAuthToken(user.token);
        })
        .catch((err) => {
            console.error("Token verification failed:", err);
            localStorage.removeItem("token");
            setAuthToken(null);
        });
};

export const loginUser = (credentials, rememberMe) => (dispatch) => {
    return axiosInstance.post("/login", credentials)
        .then((res) => {
            const user = res.data;

            const hash = md5(user.email.trim().toLowerCase());
            user.avatar = `https://www.gravatar.com/avatar/${hash}?s=200`;

            dispatch(setUser(user));

            if (rememberMe) {
                localStorage.setItem("token", user.token);
            } else {
                localStorage.removeItem("token");
            }

            toast.success(`Welcome back, ${user.name}!`);
            return user; 
        })
        .catch((err) => {
            const errorMsg = err.response?.data?.message || "Login failed.";
            toast.error(errorMsg);
            throw err; 
        });
};