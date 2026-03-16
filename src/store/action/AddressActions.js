import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = token;
    return config;
});

export const fetchAddresses = () => (dispatch) => {
    return api.get('/user/address')
        .then(res => dispatch({ type: "SET_ADDRESS_LIST", payload: res.data }))
        .catch(err => console.error("Adres çekilemedi:", err));
};

export const addAddress = (addressData) => (dispatch) => {
    return api.post('/user/address', addressData)
        .then(() => dispatch(fetchAddresses()));
};

export const deleteAddress = (addressId) => (dispatch) => {
    return api.delete(`/user/address/${addressId}`)
        .then(() => dispatch(fetchAddresses()));
};