import { Box, Chip, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface IProps {
  title: string;
  tags: string[] | undefined;
}

const TagList: FC<IProps> = ({ title, tags }) => {
  return (
    <Box>
      <Typography variant="body1" mb={0.5}>
        {title} :
      </Typography>
      <Stack direction="row" spacing={1}>
        {tags && tags.map((tag) => <Chip key={tag} label={tag} />)}
      </Stack>
    </Box>
  );
};

export default TagList;
