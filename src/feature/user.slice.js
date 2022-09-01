import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            user: null,
        },
        reducers: {
            setUserOnStore: (state, { payload }) => {
                state.user = payload;
            },
        },

    },
    {
        name : 'userLogged',
        initialState : false,
        reducers : {
            setUserLogged: (state, { payload }) => {
                state = payload
            }
        }
    }
);

export const { setUserOnStore, setUserLogged } = userSlice.actions
export default userSlice.reducer;