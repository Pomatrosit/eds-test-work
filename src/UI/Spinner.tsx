import { CircularProgress, Stack } from "@mui/material";

const Spinner = () => {
  return (
    <Stack direction="row" justifyContent="center" py={5}>
      <CircularProgress />
    </Stack>
  );
};

export default Spinner;
