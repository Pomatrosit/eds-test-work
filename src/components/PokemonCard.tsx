import { Avatar, Box, Card, CardHeader, CardMedia } from "@mui/material";
import { IPokemon } from "../models/pokemon";
import { FC } from "react";
import { stringService } from "../helpers/string";
import { useGetOnePokemonQuery } from "../store/pokemon.api";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";
import TagList from "../UI/TagList";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setActivePokemon } from "../store/pokemon.slice";

interface IProps {
  pokemon: Pick<IPokemon, "name" | "url">;
}

const styles = {
  cursor: "pointer",
};

const PokemonCard: FC<IProps> = ({ pokemon }) => {
  const {
    data: detailedPokemon,
    isLoading,
    error,
  } = useGetOnePokemonQuery(pokemon.url);

  const dispatch = useAppDispatch();

  const handleCardClick = () => {
    dispatch(setActivePokemon(detailedPokemon));
  };

  return (
    <Card elevation={2} sx={styles} onClick={handleCardClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "tomato" }} aria-label="recipe">
            {stringService.getFirstLetter(pokemon.name)}
          </Avatar>
        }
        title={stringService.uppercaseFirstLetter(pokemon.name)}
      />
      <Box p={2}>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <>
            <Box mx={-2}>
              <CardMedia
                component="img"
                height="200"
                image={detailedPokemon?.sprites.front_default}
                alt="Paella dish"
              />
            </Box>

            <Box mb={2}>
              <TagList
                title="Types"
                tags={detailedPokemon?.types.map((type) => type.type.name)}
              />
            </Box>
          </>
        )}
      </Box>
    </Card>
  );
};

export default PokemonCard;
