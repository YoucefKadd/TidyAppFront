import { createSlice } from "@reduxjs/toolkit"

export const categorieSlice = createSlice(
    {
        name: 'categorie',
        initialState: {
            categories: null
        },
        reducers: {
            setCategoriesOnStore: (state, { payload }) => {
                state.categories = payload;
            }
        }

    }
);

export const { setCategoriesOnStore } = categorieSlice.actions;
export default categorieSlice.reducer