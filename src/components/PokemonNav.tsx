import { Stack, TablePagination } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const itemsPerPageValues = [10, 20, 50];

interface IProps {
  count: number;
  //   next: string | null;
  //   previous: string | null;
}

const PokemonNav: FC<IProps> = ({ count }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    navigate(`?limit=${itemsPerPage}&offset=${itemsPerPage * newPage}`);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newItemsPerPage = event.target.value;
    setItemsPerPage(parseInt(newItemsPerPage, 10));
    navigate(`?limit=${newItemsPerPage}&offset=0`);
    setPage(0);
  };

  return (
    <Stack direction="row" mb={5} justifyContent="flex-end">
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={itemsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Stack>
  );
};

export default PokemonNav;
