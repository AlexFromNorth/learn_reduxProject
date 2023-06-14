import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import { userSLice } from "./user/user.slice";

const reducers = combineReducers({
    favorites: favoriteReducer,
    user: userSLice.reducer,
})

export const store = configureStore({
    reducer:reducers,
    devTools: true,
}) 