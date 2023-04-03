import { Box, Grid, Stack, Typography } from "@mui/material";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useGetAllPokemonsQuery } from "../../store/pokemon.api";
import Spinner from "../../UI/Spinner";
import ErrorMessage from "../../UI/ErrorMessage";
import usePagination from "../PokemonPagination/usePokemonPagination";
import usePageLimit from "../PokemonPageLimit/usePokemonPageLimit";
import { useMemo } from "react";
import useSearch from "../PokemonSearch/usePokemonSearch";
import PokemonPageLimit from "../PokemonPageLimit/PokemonPageLimit";
import PokemonPagination from "../PokemonPagination/PokemonPagination";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import { filterPokemonList } from "./filter";

const PokemonList = () => {
  const { data: pokemons, isLoading, error } = useGetAllPokemonsQuery();
  const count = pokemons?.count || 0;

  const { activePage } = usePagination();
  const { limit } = usePageLimit();
  const { search } = useSearch();

  const list = useMemo(
    () =>
      filterPokemonList({ limit, page: activePage, search }, pokemons?.results),
    [limit, activePage, search, pokemons]
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

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
            spacing={5}
          >
            <PokemonPageLimit />
            <PokemonSearch />
          </Stack>

          <Grid container direction="row" flexWrap="wrap" spacing={3} mb={3}>
            {list.result.map((pokemon) => (
              <Grid item key={pokemon.name} xs={12} md={6} lg={4}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>

          <PokemonPagination
            count={
              search
                ? Math.ceil(list.searchLength / limit)
                : Math.ceil(count / limit)
            }
          />
        </Box>
      )}
    </>
  );
};

export default PokemonList;
