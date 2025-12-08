import { Box, CircularProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Box minHeight="95vh">
      <Stack direction="row" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Stack>
    </Box>
  );
}
