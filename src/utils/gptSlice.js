import { createSlice } from "@reduxjs/toolkit";

const gptSice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
})

export const {toggleGptSearch} = gptSice.actions;
export default gptSice.reducer; 