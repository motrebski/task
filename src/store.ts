import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from "./reducers/homeReducer";

const store = configureStore({ reducer: homeReducer });

export type RootState = ReturnType<typeof store.getState>
export default store;
