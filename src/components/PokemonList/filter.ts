import { IPokemon } from "../../models/pokemon";

export interface IPokemonParams {
  limit: string | number;
  page: string | number;
  search: string;
}

export const filterPokemonList = (
  params: IPokemonParams,
  list: Pick<IPokemon, "name" | "url">[] | undefined = []
) => {
  let result = list;
  const search = params.search.trim();
  if (search) {
    result = list.filter((pokemon) => {
      if (pokemon.name.includes(search)) return true;
      return false;
    });
  }
  const searchLength = result.length;
  const limit = +params.limit;
  const page = +params.page;
  const start = (page - 1) * limit;
  const end = start + Number(limit);
  result = result.slice(start, end);
  return {
    result,
    searchLength,
  };
};
