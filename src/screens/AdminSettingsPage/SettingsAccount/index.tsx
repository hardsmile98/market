import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ChangePassword from './ChangePassword';

function SettingsAccount() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h5" mb={1}>
        Настройка аккаунта
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Box mb={1}>
          Смена пароля администратора
        </Box>

        <Button
          fullWidth
          onClick={() => setOpen(true)}
        >
          Сменить пароль
        </Button>
      </Paper>

      {isOpen && (
        <ChangePassword
          open={isOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default SettingsAccount;
