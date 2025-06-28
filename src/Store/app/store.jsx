import { configureStore } from "@reduxjs/toolkit";
import timeDataReducer from "../features/Timedata"

export const  store = configureStore({
    reducer:{
        timedata:timeDataReducer,
    }
})