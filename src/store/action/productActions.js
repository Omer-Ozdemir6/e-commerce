import axiosInstance from "../../api/axiosInstance";

export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
});
export const setFetchState = (state) => ({
    type: 'SET_FETCH_STATE',
    payload: state
});

export const fetchCategories = () => (dispatch, getState) => {
    const { fetchState } = getState().product;

    if (fetchState === "FETCHED" || fetchState === "FETCHING") return;
    
    dispatch(setFetchState("FETCHING"));
    
    return axiosInstance.get("/categories")
        .then((response) => {
            dispatch(setCategories(response.data));
        })
        .catch((error) => {
            dispatch(setFetchState("FAILED"));
            console.error("Error fetching categories:", error);
        });
};
