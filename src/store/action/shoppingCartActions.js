
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT";
export const TOGGLE_ITEM_CHECK = "TOGGLE_ITEM_CHECK";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

/**
 *
 * @param {Object} product
 */
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

/**
 *
 * @param {number|string} productId
 */
export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

/**
 *
 * @param {number|string} productId
 * @param {number} count
 */
export const updateItemCount = (productId, count) => ({
    type: UPDATE_ITEM_COUNT,
    payload: { productId, count }
});

/**
 *
 * @param {number|string} productId
 */
export const toggleItemCheck = (productId) => ({
    type: TOGGLE_ITEM_CHECK,
    payload: productId
});

/**
 *
 */
export const clearCart = () => ({
    type: CLEAR_CART
});

/**
 * 
 * @param {Object} payment
 */
export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment
});

/**
 *
 * @param {Object} address
 */
export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address
});