import { Container } from "@mui/material";
import PokemonList from "../components/PokemonList/PokemonList";
import PokemonDetailModal from "../components/PokemonDetailModal/PokemonDetailModal";

const PokemonListPage = () => {
  return (
    <Container>
      <PokemonList />
      <PokemonDetailModal />
    </Container>
  );
};

export default PokemonListPage;
