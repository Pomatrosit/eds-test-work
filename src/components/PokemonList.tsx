import { Box, Grid, Typography } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { useGetAllPokemonsQuery } from "../store/pokemon.api";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import PokemonNav from "./PokemonNav";
import { useSearchParams } from "react-router-dom";

const PokemonList = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  const {
    data: pokemons,
    isLoading,
    error,
  } = useGetAllPokemonsQuery({
    limit: limit ? limit : "10",
    offset: offset ? offset : "0",
  });

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  return (
    <>
      {pokemons && (
        <Box pt={3} pb={5}>
          <Typography variant="h4" mb={3}>
            Pokemon List
          </Typography>
          <PokemonNav count={pokemons.count} />
          <Grid container direction="row" flexWrap="wrap" spacing={3} mb={3}>
            {pokemons &&
              pokemons.results.map((pokemon) => (
                <Grid item key={pokemon.name} xs={4}>
                  <PokemonCard pokemon={pokemon} />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default PokemonList;
