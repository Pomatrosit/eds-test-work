import { Pagination, Stack } from "@mui/material";
import { FC } from "react";
import usePokemonPagination from "./usePokemonPagination";

interface IProps {
  count: number;
}

const PokemonPagination: FC<IProps> = ({ count }) => {
  const { activePage, handlePageChange } = usePokemonPagination();
  return (
    <Stack direction="row" justifyContent="flex-end" py={2}>
      <Pagination
        count={count}
        color="primary"
        page={activePage}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default PokemonPagination;
