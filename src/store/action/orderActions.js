import { axiosWithAuth } from "../../api/axiosWithAuth";

export const createOrder = (orderData) => (dispatch) => {
    return axiosWithAuth()
        .post("/order", orderData)
        .then((res) => {
            console.log("Sipariş Başarılı:", res.data);
            return res.data;
        })
        .catch((err) => {
            console.error("Sipariş Hatası:", err);
            throw err;
        });
};