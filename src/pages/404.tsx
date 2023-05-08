import { Box, Typography } from '@mui/material';
import { Back } from '../components';

function Error404() {
  return (
    <Box
      pt={5}
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

      <Back />
    </Box>
  );
}

export default Error404;
