import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/seller/auth";

const store = configureStore({
    reducer: {
        sellerAuth: authSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store
