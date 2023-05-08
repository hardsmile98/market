import { Back, Reviews } from '#/src/components';
import { Box, Button, Typography } from '@mui/material';

function Page() {
  return (
    <>
      <Box mb={2}>
        <Back />
      </Box>

      <Typography variant="h5">
        Отзывы магазина
      </Typography>

      <Box my={3}>
        <Reviews />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        mb={3}
      >
        <Button>
          Оставить отзыв о магазине
        </Button>
      </Box>
    </>
  );
}

export default Page;
