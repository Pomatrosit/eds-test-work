import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { POKEMON_API_URL } from "../constants/common";
import { IPokemon } from "../models/pokemon";

interface IGetAllPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pick<IPokemon, "name" | "url">[];
}

interface IGetAllPokemons {
  limit: string;
  offset: string;
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery(),
  keepUnusedDataFor: 60 * 60,
  endpoints: (builder) => ({
    getAllPokemons: builder.query<IGetAllPokemonsResponse, IGetAllPokemons>({
      query: (data) =>
        `${POKEMON_API_URL}/pokemon?limit=${
          data.limit ? data.limit : 10
        }&offset=${data.offset ? data.offset : 0}`,
    }),
    getOnePokemon: builder.query<IPokemon, string>({
      query: (url) => url,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetOnePokemonQuery } = pokemonApi;
