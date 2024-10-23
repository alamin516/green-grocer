import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authReducer from "/src/lib/features/auth/authSlice";
import recentViewsReducer from "/src/lib/features/product/recentProductsSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        recentViews: recentViewsReducer
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

const initializeApp = async() =>{
    await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, {forceRefetch: true}));
}

initializeApp();
