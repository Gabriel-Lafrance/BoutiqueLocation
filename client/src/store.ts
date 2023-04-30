import { configureStore, createSlice } from "@reduxjs/toolkit";


const filtreAnneeSlice = createSlice({
    name : "filtreAnnee",
    initialState: {value: ""},
    reducers: {
        updateFiltreAnnee : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreAnnee : (state) =>{
            state.value = "";
        }
    }
})

const filtreMarqueSlice = createSlice({
    name : "filtreMarque",
    initialState: {value: ""},
    reducers: {
        updateFiltreMarque : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreMarque : (state) =>{
            state.value = "";
        }
    }
})

export const {updateFiltreAnnee, clearFiltreAnnee} = filtreAnneeSlice.actions;
export const {updateFiltreMarque, clearFiltreMarque} = filtreMarqueSlice.actions;

export const store = configureStore({
    reducer: {
        filtreAnnee : filtreAnneeSlice.reducer,
        filtreMarque : filtreMarqueSlice.reducer
    }
});
