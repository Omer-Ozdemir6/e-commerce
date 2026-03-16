import axiosInstance from "../../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_ACTIVE_PRODUCT = "SET_ACTIVE_PRODUCT"; 
export const SET_FILTER = "SET_FILTER";



export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setFetchState = (state) => ({ type: SET_FETCH_STATE, payload: state });
export const setProductList = (products) => ({ type: SET_PRODUCT_LIST, payload: products });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setActiveProduct = (product) => ({ type: SET_ACTIVE_PRODUCT, payload: product });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });

export const fetchProducts = (params = {}) => (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    return axiosInstance.get("/products", { params })
        .then((response) => {
            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            dispatch(setFetchState("FAILED"));
        });
};

export const fetchProductDetail = (productId) => (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    
    return axiosInstance.get(`/products/${productId}`)
        .then((response) => {
            dispatch(setActiveProduct(response.data));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((error) => {
            console.error("Error fetching product detail:", error);
            dispatch(setFetchState("FAILED"));
        });
};

export const fetchCategories = () => (dispatch, getState) => {
    const { fetchState } = getState().product;

    if (fetchState === "FETCHED" || fetchState === "FETCHING") return;
    
    dispatch(setFetchState("FETCHING"));
    
    return axiosInstance.get("/categories")
        .then((response) => {
            dispatch(setCategories(response.data));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((error) => {
            dispatch(setFetchState("FAILED"));
            console.error("Error fetching categories:", error);
        });
    };