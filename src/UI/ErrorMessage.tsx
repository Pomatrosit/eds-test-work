import { Alert, Box } from "@mui/material";

const ErrorMessage = () => {
  return (
    <Box py={2}>
      <Alert severity="error">Something went wrong!</Alert>
    </Box>
  );
};

export default ErrorMessage;
