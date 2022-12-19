import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    WhoAmI: 0,
    Skills: 0,
};

const scroll = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        dispatchWhoAmI: (state, action) => {
            state.WhoAmI = action.payload;
        },
        dispatchSkills: (state, action) => {
            state.Skills = action.payload;
        }
    }
})

export default scroll.reducer;

export const {
    dispatchWhoAmI,
    dispatchSkills,
} = scroll.actions;