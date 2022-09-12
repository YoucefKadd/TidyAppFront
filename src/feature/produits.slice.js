import { createSlice } from "@reduxjs/toolkit";


export const produitsSlice = createSlice(
    {
        name: 'produits',
        initialState: {
            produits: null,
        },
        reducers: {
            setProduitsOnStore: (state, { payload }) => {
                state.produits = payload;
            },
            addProduit: (state, { payload }) => {
                state.produits.push(payload)
            },
            deleteProduit: (state, { payload }) => {
                state.produits = state.produits.filter((prod) => prod.id !== payload)
            },
            editProduit: (state, { payload }) => {
                state.produits = state.produits.map((prod) => {
                    if (prod.id === payload.id) {
                        return {
                            ...prod,
                            name: payload.produitDto.name,
                            ref: payload.produitDto.ref,
                            description: "no description",
                            prix: payload.produitDto.prix,
                            image: "no image",
                            qteStock: payload.produitDto.qteStock,
                            entrepotId: payload.produitDto.entrepotId
                        };
                    }
                    else {
                        return prod;
                    }
                })
            },
        }
    }
);

export const { setProduitsOnStore, addProduit, deleteProduit, editProduit } = produitsSlice.actions;
export default produitsSlice.reducer;