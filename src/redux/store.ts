import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import appReducer from "./features/appSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import storage from "@/redux/storage";
import logger from "redux-logger";

const appPersistConfig = {
    key: "appReducer",
    storage: storage,
    whitelist: ["lang"],
};

export const store = configureStore({
    reducer: {
        appReducer:persistReducer(appPersistConfig,appReducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

