import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer"; 
import { productReducer } from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer"; 

export const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
});