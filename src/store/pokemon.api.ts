import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { POKEMON_API_URL } from "../constants/common";
import { IPokemon } from "../models/pokemon";

interface IGetAllPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pick<IPokemon, "name" | "url">[];
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<IGetAllPokemonsResponse, void>({
      query: () => `${POKEMON_API_URL}/pokemon?offset=0&limit=1300`,
      keepUnusedDataFor: 60 * 60 * 24,
    }),
    getOnePokemon: builder.query<IPokemon, string>({
      query: (url) => url,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetOnePokemonQuery } = pokemonApi;
