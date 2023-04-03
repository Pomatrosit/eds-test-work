import { TextField } from "@mui/material";
import usePokemonSearch from "./usePokemonSearch";

const PokemonSearch = () => {
  const { search, handleSearchChange } = usePokemonSearch();

  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search"
      value={search}
      onChange={handleSearchChange}
    />
  );
};

export default PokemonSearch;
