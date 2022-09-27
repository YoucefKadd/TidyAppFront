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
            },
            addCategorie: (state, { payload }) => {
                state.categories.push(payload)
            },
            deleteCategorie: (state, { payload }) => {
                state.categories = state.categories.filter((cat) => cat.id !== payload)
            },
            editCategorie: (state, { payload }) => {
                state.categories = state.categories.map((cat) => {
                    if (cat.id === payload.id) {
                        return {
                            ...cat,
                            name: payload.categorieDto.name,
                            ref: payload.categorieDto.ref,
                            description: payload.categorieDto.description,
                            image: "no image",
                            entrepotId: payload.categorieDto.entrepotId
                        };
                    }
                    else {
                        return cat;
                    }
                })
            }
        }

    }
);

export const { setCategoriesOnStore, addCategorie, deleteCategorie, editCategorie } = categorieSlice.actions;
export default categorieSlice.reducer