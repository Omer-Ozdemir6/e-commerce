import { axiosWithAuth } from "../../api/axiosWithAuth";

export const SET_CARD_LIST = "SET_CARD_LIST";

export const fetchCards = () => (dispatch) => {
    return axiosWithAuth()
        .get("/user/card")
        .then((res) => {

            dispatch({ type: SET_CARD_LIST, payload: res.data });
        })
        .catch((err) => console.error("Kartlar çekilemedi:", err));
};

export const addCard = (cardData) => (dispatch) => {
    return axiosWithAuth()
        .post("/user/card", cardData)
        .then(() => {
            dispatch(fetchCards());
        })
        .catch((err) => console.error("Kart eklenemedi:", err));
};


export const deleteCard = (cardId) => (dispatch) => {
    return axiosWithAuth()
        .delete(`/user/card/${cardId}`)
        .then(() => {
            dispatch(fetchCards());
        })
        .catch((err) => console.error("Kart silinemedi:", err));
};