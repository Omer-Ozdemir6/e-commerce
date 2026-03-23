import { axiosWithAuth } from "../../api/axiosWithAuth";
import { clearCart } from "./shoppingCartActions";

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