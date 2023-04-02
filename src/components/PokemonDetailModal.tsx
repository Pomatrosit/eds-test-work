import { Box, CardMedia, Modal, Stack, Typography } from "@mui/material";
import { setActivePokemon } from "../store/pokemon.slice";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import TagList from "../UI/TagList";
import { uppercaseFirstLetter } from "../helpers/string";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 24,
  p: 2,
  bgcolor: "background.paper",
};

const PokemonDetailModal = () => {
  const pokemon = useAppSelector((state) => state.pokemon.activePokemon);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setActivePokemon(null));
  };

  return (
    <Modal open={!!pokemon} onClose={handleClose}>
      <Box sx={style}>
        {pokemon && (
          <>
            <Typography textAlign="center" variant="h4">
              {uppercaseFirstLetter(pokemon?.name)}
            </Typography>
            <Stack direction="row">
              <CardMedia
                component="img"
                height="200"
                image={pokemon.sprites.front_default}
                alt="Paella dish"
              />
              <CardMedia
                component="img"
                height="200"
                image={pokemon.sprites.back_default}
                alt="Paella dish"
              />
            </Stack>
            <Box mb={2}>
              <TagList
                title="Types"
                tags={pokemon.types.map((type) => type.type.name)}
              />
            </Box>
            <Box mb={2}>
              <TagList
                title="Abilities"
                tags={pokemon.abilities.map((ability) => ability.ability.name)}
              />
            </Box>
            <Typography mb={1}>Weight: {pokemon.weight}</Typography>
            <Typography mb={1}>
              Base experience: {pokemon.base_experience}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PokemonDetailModal;
