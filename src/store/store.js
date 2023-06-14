import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import { userSLice } from "./user/user.slice";
import { api } from "./api/api";

const reducers = combineReducers({
    favorites: favoriteReducer,
    user: userSLice.reducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer:reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
}) 