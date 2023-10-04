import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from "./reducers/homeReducer";
import createSagaMiddleware from 'redux-saga';
import projectSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: homeReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(projectSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
