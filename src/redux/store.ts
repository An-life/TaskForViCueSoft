import {configureStore} from '@reduxjs/toolkit';
import {catalogApi} from "../api/beerApi";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;