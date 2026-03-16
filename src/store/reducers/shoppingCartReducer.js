const initialState = {
    cart: [],
    payment: {},
    address: {}
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
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

        case "SET_PAYMENT":
            return { ...state, payment: action.payload };
            
        case "SET_ADDRESS":
            return { ...state, address: action.payload };
            
        default:
            return state;
    }
};

export default shoppingCartReducer;