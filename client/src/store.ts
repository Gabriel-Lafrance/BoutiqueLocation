import { configureStore, createSlice } from "@reduxjs/toolkit";


const filtreAnneeSlice = createSlice({
    name : "filtreAnnee",
    initialState: {value: "Toutes"},
    reducers: {
        updateFiltreAnnee : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreAnnee : (state) =>{
            state.value = "Toutes";
        }
    }
})

const filtreMarqueSlice = createSlice({
    name : "filtreMarque",
    initialState: {value: "Toutes"},
    reducers: {
        updateFiltreMarque : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreMarque : (state) =>{
            state.value = "Toutes";
        }
    }
})

const filtreDisponibleSlice = createSlice({
    name : "filtreDisponible",
    initialState: {value: "Toutes"},       // Option : 0 = Indisponible , 1 = Disponible , 2 = Peu  importe
    reducers: {
        updateFiltreDisponible : (state,action) => {
            state.value = action.payload;
        },
        clearFiltreDisponible : (state) =>{
            state.value = "Toutes";
        }
    }
})

const nbResultatSlice = createSlice({
    name : "nbResultat",
    initialState: {value: 0},
    reducers: {
        updateNbResultat : (state,action) => {
            state.value = action.payload;
        },
        clearNbResultat : (state) =>{
            state.value = 0;
        }
    }
})

export const {updateFiltreAnnee, clearFiltreAnnee} = filtreAnneeSlice.actions;
export const {updateFiltreMarque, clearFiltreMarque} = filtreMarqueSlice.actions;
export const {updateFiltreDisponible, clearFiltreDisponible} = filtreDisponibleSlice.actions;
export const {updateNbResultat, clearNbResultat} = nbResultatSlice.actions;

export const store = configureStore({
    reducer: {
        filtreAnnee : filtreAnneeSlice.reducer,
        filtreMarque : filtreMarqueSlice.reducer,
        filtreDisponible : filtreDisponibleSlice.reducer,
        nbResultat : nbResultatSlice.reducer,
    }
});
