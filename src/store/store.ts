import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/seller/auth";

const store = configureStore({
    reducer: {
        sellerAuth: authSliceReducer
    }
})

export default store
