import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    UPDATE_ITEM_COUNT, 
    TOGGLE_ITEM_CHECK,
    SET_PAYMENT,
    SET_ADDRESS 
} from "../action/shoppingCartActions";

export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CARD_LIST = "SET_CARD_LIST";

const initialState = {
    cart: [],
    payment: {},
    address: {},
    addressList: [],
    cardList: []
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ADDRESS_LIST:
            return {
                ...state,
                addressList: action.payload
            };


        case SET_CARD_LIST:
            return {
                ...state,
                cardList: action.payload
            };

        case ADD_TO_CART:
            const productToAdd = action.payload;
            const existingItem = state.cart.find(
                (item) => item.product.id === productToAdd.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.product.id === productToAdd.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        { count: 1, checked: true, product: productToAdd }
                    ]
                };
            }

        case UPDATE_ITEM_COUNT:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload.productId
                        ? { ...item, count: Math.max(1, action.payload.count) }
                        : item
                )
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.product.id !== action.payload)
            };

        case TOGGLE_ITEM_CHECK:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? { ...item, checked: !item.checked }
                        : item
                )
            };

        case SET_PAYMENT:
            return { ...state, payment: action.payload };
            
        case SET_ADDRESS:
            return { ...state, address: action.payload };
            
        default:
            return state;
    }
};

export default shoppingCartReducer;