import { axiosWithAuth } from "../../api/axiosWithAuth";
import { clearCart } from "./shoppingCartActions";


export const SET_PREVIOUS_ORDERS = "SET_PREVIOUS_ORDERS";

export const fetchPreviousOrders = () => (dispatch) => {
    return axiosWithAuth()
        .get("/order")
        .then((res) => {
            dispatch({ type: SET_PREVIOUS_ORDERS, payload: res.data });
        })
        .catch((err) => console.error("Siparişler çekilemedi:", err));
};

export const createOrder = (orderData) => (dispatch) => {
    return axiosWithAuth()
        .post("/order", orderData)
        .then((res) => {
            console.log("Sipariş Başarılı:", res.data);

            dispatch(clearCart()); 
            
            return res.data;
        })
        .catch((err) => {
            console.error("Sipariş Hatası:", err);
            throw err;
        });
};