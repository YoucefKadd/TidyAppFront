import { createSlice } from "@reduxjs/toolkit";


export const entrepotSlice = createSlice(
    {
        name:'entrepot',
        initialState: {
            entrepot: null,
        },
        reducers: {
            setEntrepotOnStore : (state, {payload}) => {
                state.entrepot = payload;
            },
        }
    }
);

export const {setEntrepotOnStore} = entrepotSlice.actions;
export default entrepotSlice.reducer;