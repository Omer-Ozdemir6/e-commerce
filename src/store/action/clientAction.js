import { get } from "react-hook-form";

export const setRoles = (roles) => ({
    type: 'SET_ROLES',
    payload: roles
});

export const fetchRoles = () => (dispatch, getState) => {
    const{roles} = getState().client;
    if(roles.length === 0 ){
        axiosInstance.get("/roles").then((response) => {
            dispatch(setRoles(response.data));
        }).catch((error) => {
            console.error("Error fetching roles:", error);
        }); 
    }
};