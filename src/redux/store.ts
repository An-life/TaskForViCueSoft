import {configureStore} from '@reduxjs/toolkit';

import {catalogApi} from "../api/beerApi";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [],
            },
        }).concat(catalogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;