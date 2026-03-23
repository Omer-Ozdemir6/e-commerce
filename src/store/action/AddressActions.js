import { axiosWithAuth } from "../../api/axiosWithAuth";

export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";

export const fetchAddresses = () => (dispatch) => {
  axiosWithAuth().get("/user/address")
    .then(res => dispatch({ type: SET_ADDRESS_LIST, payload: res.data }))
    .catch(err => console.error("Adresler çekilemedi", err));
};

export const addAddress = (data) => (dispatch) => {
  return axiosWithAuth().post("/user/address", data).then(() => dispatch(fetchAddresses()));
};

export const updateAddress = (data) => (dispatch) => {
  return axiosWithAuth().put("/user/address", data).then(() => dispatch(fetchAddresses()));
};

export const deleteAddress = (addressId) => (dispatch) => {
  return axiosWithAuth()
    .delete(`/user/address/${addressId}`)
    .then(() => {
      dispatch(fetchAddresses());
    })
    .catch((err) => {
      console.error("Adres silinirken hata oluştu:", err);
      alert("Adres silinemedi, lütfen tekrar deneyin.");
    });
};