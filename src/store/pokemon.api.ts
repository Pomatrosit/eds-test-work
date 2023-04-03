import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { POKEMON_API_URL } from "../constants/common";
import { IPokemon } from "../models/pokemon";
import { IListItem } from "../models/common";

interface IGetCategoryResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery(),
  keepUnusedDataFor: 60 * 60 * 24,
  endpoints: (builder) => ({
    getAllPokemons: builder.query<IGetCategoryResponse<IListItem>, void>({
      query: () => `${POKEMON_API_URL}/pokemon?offset=0&limit=1300`,
    }),
    getOnePokemon: builder.query<IPokemon, string>({
      query: (url) => url,
    }),
    getAllTypes: builder.query<IGetCategoryResponse<IListItem>, void>({
      query: () => `${POKEMON_API_URL}/type`,
    }),
    getOneType: builder.query<IGetCategoryResponse<IListItem>, string>({
      query: (type) => `${POKEMON_API_URL}/type/${type}`,
    }),
  }),
});

export const {
  useGetAllPokemonsQuery,
  useGetOnePokemonQuery,
  useGetAllTypesQuery,
  useLazyGetOneTypeQuery,
} = pokemonApi;
