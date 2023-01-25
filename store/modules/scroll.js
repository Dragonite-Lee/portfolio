import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    WhoAmI: 0,
    Skills: 0,
    Activity_Certificate: 0,
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
        },
        dispatchActivity_Certificate: (state, action) => {
            state.Activity_Certificate = action.payload;
        }
    }
})

export default scroll.reducer;

export const {
    dispatchWhoAmI,
    dispatchSkills,
    dispatchActivity_Certificate
} = scroll.actions;