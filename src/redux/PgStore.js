'use client'
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
// import counterSlice from './slices/counter/counterSlice';
import snackbarSlice from './slices/snackbarSlice';
import PageLoderSlice from './slices/loadingSlice';

const rootReducer = combineReducers({
    snackbar: snackbarSlice,
    pageLoader: PageLoderSlice,
    // add other reducers here
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const PgStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(PgStore);

export { PgStore, persistor };
