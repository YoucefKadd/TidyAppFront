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
        }
    }
);

export const { setUserOnStore } = userSlice.actions
export default userSlice.reducer;