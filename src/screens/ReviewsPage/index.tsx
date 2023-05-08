import { Back } from '#/src/components';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import Add from './Add';
import Reviews from './Reviews';

function ReviewsPage() {
  const [isOpenModal, setOpen] = useState(false);

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
        <Button onClick={() => setOpen(true)}>
          Оставить отзыв о магазине
        </Button>
      </Box>

      {isOpenModal && (
        <Add
          open={isOpenModal}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default ReviewsPage;
