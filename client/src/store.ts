import { configureStore, createSlice } from "@reduxjs/toolkit";


const filtreAnneeSlice = createSlice({
    name : "filtreAnnee",
    initialState: {value: "Tout"},
    reducers: {
        updateFiltreAnnee : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreAnnee : (state) =>{
            state.value = "Tout";
        }
    }
})

const filtreMarqueSlice = createSlice({
    name : "filtreMarque",
    initialState: {value: "Tout"},
    reducers: {
        updateFiltreMarque : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreMarque : (state) =>{
            state.value = "Tout";
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
