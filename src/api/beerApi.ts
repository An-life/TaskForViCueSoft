import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {baseUrl} from "./constants";

export interface IBeersResponse {
    id: number;
    name: string;
    tagline: string;
    description: string;
    image_url: string
    abv: number;
    food_pairing: string [],
}

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (build) => ({
        getBeers: build.query<IBeersResponse[], void>({
            query: () => 'beers',
        }),
        getBeerById: build.query<IBeersResponse[], number | undefined>({
            query: (id: number) => `beers/${id}`,
        }),
    }),
});

export const {useGetBeersQuery, useGetBeerByIdQuery} = catalogApi;