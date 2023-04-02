import {
  Box,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PokemonCard from "./PokemonCard";
import { useGetAllPokemonsQuery } from "../store/pokemon.api";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import usePagination from "../hooks/usePagination";
import usePageLimit from "../hooks/usePageLimit";
import { IPokemon } from "../models/pokemon";
import { useMemo } from "react";
import useSearch from "../hooks/useSearch";

interface IPokemonParams {
  limit: string | number;
  page: string | number;
  search: string;
}

const filterPokemonList = (
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

const PokemonList = () => {
  const { data: pokemons, isLoading, error } = useGetAllPokemonsQuery();
  const count = pokemons?.count || 0;

  const { activePage, handlePageChange } = usePagination();
  const { limit, handleLimitChange } = usePageLimit();
  const { search, handleSearchChange } = useSearch();

  const list = useMemo(
    () =>
      filterPokemonList({ limit, page: activePage, search }, pokemons?.results),
    [limit, activePage, search]
  );

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  return (
    <>
      {pokemons && (
        <Box pt={3} pb={5}>
          <Typography variant="h4" mb={3}>
            Pokemon List
          </Typography>

          <Stack direction="row" alignItems="center" mb={3} spacing={5}>
            <Stack direction="row" alignItems="center">
              <Typography mr={1}>Pokemons per page: </Typography>
              <Select
                value={String(limit)}
                displayEmpty
                onChange={handleLimitChange}
                size="small"
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </Stack>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </Stack>

          <Grid container direction="row" flexWrap="wrap" spacing={3} mb={3}>
            {list.result.map((pokemon) => (
              <Grid item key={pokemon.name} xs={4}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>

          <Stack direction="row" justifyContent="flex-end" py={2}>
            <Pagination
              count={
                search
                  ? Math.ceil(list.searchLength / limit)
                  : Math.ceil(count / limit)
              }
              color="primary"
              page={activePage}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default PokemonList;
