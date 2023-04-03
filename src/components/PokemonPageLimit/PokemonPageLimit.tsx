import { MenuItem, Select, Stack, Typography } from "@mui/material";
import usePokemonPageLimit from "./usePokemonPageLimit";

const PokemonPageLimit = () => {
  const { limit, handleLimitChange } = usePokemonPageLimit();

  return (
    <Stack direction="row" alignItems="center">
      <Typography mr={1}>Per page: </Typography>
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
  );
};

export default PokemonPageLimit;
