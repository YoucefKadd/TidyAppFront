import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/user.slice';
import entrepotReducer from '../feature/entrepot.slice';
import produitsReducer from '../feature/produits.slice';
import categorieReducer from '../feature/categorie.slice'

export default configureStore({ 
    reducer: {
        userStore: userReducer,
        entrepotStore: entrepotReducer,
        produitsStore: produitsReducer,
        categorieStore: categorieReducer
    },
});