import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import AddPayment from './AddPayment';
import List from './List';

function Payments() {
  const [isAddOpen, setAddOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" mb={1}>
        Настройка методов оплаты
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Button
          fullWidth
          onClick={() => setAddOpen(true)}
        >
          Добавить способ
        </Button>

        <Box mt={2}>
          <List />
        </Box>
      </Paper>

      {isAddOpen && (
        <AddPayment
          open={isAddOpen}
          onClose={() => setAddOpen(false)}
        />
      )}
    </>
  );
}

export default Payments;
