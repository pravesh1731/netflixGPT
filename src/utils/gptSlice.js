import { createSlice } from "@reduxjs/toolkit";

const gptSice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        moviesResults: null,
        moveNames: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        appGptMoviesReslts: (state,action) => {
            const {movieNames, moveData} = action.payload;
            state.moveNames = movieNames;
            state.moviesResults = moveData;
        }
    },
})

export const {toggleGptSearch, appGptMoviesReslts} = gptSice.actions;
export default gptSice.reducer; 