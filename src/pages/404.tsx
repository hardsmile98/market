import { Box, Typography } from '@mui/material';

function Error404() {
  return (
    <Box
      py={5}
      textAlign="center"
    >
      <Typography
        variant="h1"
        fontWeight="fontWeightBold"
      >
        404
      </Typography>

      <Box my={1}>
        Такой страницы не существует
      </Box>
    </Box>
  );
}

export default Error404;
Error404.Layout = 'Main';
