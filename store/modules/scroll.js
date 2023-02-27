import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    WhoAmI: 0,
    Skills: 0,
    Certificate: 0,
    Award: 0,
    Activity_Project: 0,
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
        dispatchCertificate: (state, action) => {
            state.Certificate = action.payload;
        },
        dispatchAward: (state, action) => {
            state.Award = action.payload;
        },
        dispatchActivity_Project: (state, action) => {
            state.Activity_Project = action.payload;
        },
    }
})

export default scroll.reducer;

export const {
    dispatchWhoAmI,
    dispatchSkills,
    dispatchCertificate,
    dispatchProject,
    dispatchActivity_Project,
    dispatchAward
} = scroll.actions;